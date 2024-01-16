import {Component, OnInit} from '@angular/core';
import { IntegrationService } from 'src/app/views/integration/integration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirction',
  templateUrl: './redirction.component.html',
  styleUrls: ['./redirction.component.css']
})
export class RedirctionComponent implements OnInit{

  stillLoafing: boolean = true;
  successResponse: boolean = false;
  constructor(private _integrationService: IntegrationService, private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.stillLoafing = true;
    this._activatedRoute.queryParams
      .subscribe(params => {
        console.log(params);
        this._integrationService.login(params['code']).then(res => {
          this.stillLoafing = false;
          this.successResponse = res;
        });
        }
      );

  }
}
