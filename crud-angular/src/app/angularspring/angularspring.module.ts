import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularspringRoutingModule } from './angularspring-routing.module';
import { AngularspringComponent } from './containers/angularspring/angularspring.component';
import { SharedModule } from '../shared/shared.module';
import { AngularFormComponent } from './containers/angular-form/angular-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularListComponent } from './components/angular-list/angular-list.component';

@NgModule({
  declarations: [
    AngularspringComponent,
    AngularFormComponent,
    AngularListComponent
  ],
  imports: [
    CommonModule,
    AngularspringRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AngularspringModule { }
