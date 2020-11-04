import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {RisqueComponent} from './risque/risque.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'admin', component: RisqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
