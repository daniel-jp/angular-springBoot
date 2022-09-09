import { AngspringResolver } from './guards/angspring.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormComponent } from './containers/angular-form/angular-form.component';
import { AngularspringComponent } from './containers/angularspring/angularspring.component';

const routes: Routes = [
  {path:'', component: AngularspringComponent},
  {path:'new', component: AngularFormComponent, resolve: { angspring: AngspringResolver } },
  {path: 'edit/:id', component: AngularFormComponent,resolve:{ angspring: AngspringResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularspringRoutingModule { }
