import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { IntegrationComponent } from './integration/integration.component';
import { RedirctionComponent } from './redirction/redirction.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

const routes: Routes = [
  {
    path: '',
    component: IntegrationComponent,
  },
  {
    path: 'redirection',
    component: RedirctionComponent,
  },
]
@NgModule({
  declarations: [
    IntegrationComponent,
    RedirctionComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatExpansionModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
  providers: []
})
export class IntegrationModule { }
