import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthRepository } from 'src/app/core/repositories/auth.repository';
import { UserModel } from 'src/app/core/models/user.models';
@Injectable({
    providedIn: 'root'
})
export class IntegrationService
{

    userData: UserModel = new UserModel();
    /**
     * Constructor
     */
    constructor(
        private _authRepository: AuthRepository,
        private _router: Router,
      )
    {
    }


    async getLoginPage(): Promise<void> {
      this._authRepository.loginPageUri().subscribe(res => {
        console.log(res?.data?.url)
        window.location.href = res?.data?.url;
      })
    }

  async login(authCode: string): Promise<any> {
     return new Promise(resolve => {
       this._authRepository.loginAPI(authCode).subscribe(res => {
         this._initSession(res);
         this._router.navigate(['/']);
       }, err => {
         console.log(err);
         resolve(false);
       })
     })
  }

  async accessCheck(): Promise<any> {
    return new Promise(resolve => {
      this._authRepository.checkAccessAPI().subscribe(res => {
        this._initSession(res);
        resolve(true);
      }, err => {
        console.log(err);
        resolve(false);
      })
    })
  }

  async deleteSession(): Promise<any> {
    return new Promise(resolve => {
      this._authRepository.deleteSessionAPI().subscribe(res => {
        this._removeSession();
        resolve(true);
      }, err => {
        console.log(err);
        resolve(false);
      })
    })
  }

  private _initSession(res: any){
      console.log(res);
    this.userData = new UserModel({
      login: res?.data?.user_info?.login,
      email: res?.data?.user_info?.email,
      name: res?.data?.user_info?.name,
      last_request: res?.data?.user_info?.last_request,
      access_token: res?.data?.access_token,
    });
    localStorage.setItem('access_token', res?.data?.access_token);
  }

  private _removeSession(){
    this.userData = new UserModel();
    localStorage.removeItem('access_token');
  }



}
