import { Injectable } from '@angular/core';
import { LOGIN_PAGE_API, LOGIN_API, CHECK_ACCESS_API, DELETED_SESSION_API } from 'src/app/core/api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthRepository {
    /**
     * Constructor
     *
     */
    constructor(private  httpClient: HttpClient) {
    }

     loginPageUri(): Observable<any> {
        return this.httpClient.get(`${LOGIN_PAGE_API()}`);
     }

      loginAPI(authCode: string): Observable<any> {
        return this.httpClient.post(`${LOGIN_API()}`, { auth_code: authCode });
      }

      checkAccessAPI(): Observable<any> {
        return this.httpClient.get(`${CHECK_ACCESS_API()}`, { headers: new HttpHeaders().set('Authorization', localStorage.getItem('access_token') || "") });
      }

      deleteSessionAPI(): Observable<any> {
        return this.httpClient.delete(`${DELETED_SESSION_API()}`, { headers: new HttpHeaders().set('Authorization', localStorage.getItem('access_token') || "") });
      }

}
