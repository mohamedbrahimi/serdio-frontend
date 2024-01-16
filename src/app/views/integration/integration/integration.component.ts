import {Component, OnInit} from '@angular/core';
import { IntegrationService } from 'src/app/views/integration/integration.service';
import {UserModel} from "../../../core/models/user.models";
@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.css']
})
export class IntegrationComponent implements OnInit{
  panelOpenState: boolean = true;
  isOnline: boolean = false;
  stillLoafing: boolean = true;
  user: UserModel = new UserModel();
  constructor(private _integrationService: IntegrationService) {
  }

  ngOnInit() {
    this.stillLoafing = true;
    this._integrationService.accessCheck().then(res => {
      this.stillLoafing = false;
      this.isOnline = res;
      console.log(res);
      this.user = this._integrationService.userData;
      console.log(this._integrationService.userData);
    });
  }

  connectGithub() {
    this._integrationService.getLoginPage().then();
  }

  removeGithub() {
    this._integrationService.deleteSession().then(res => {
      if (res)
       location.reload();
      else
        window.alert('Error While removing github session!');
    });
  }
}
