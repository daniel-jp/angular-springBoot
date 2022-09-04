
//GLOBAL MODEL

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'angularspring'},
  {
    path: 'angularspring',
    loadChildren: () => import('./angularspring/angularspring.module').then(m => m.AngularspringModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
