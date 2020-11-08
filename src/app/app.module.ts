import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RisqueComponent } from './risque/risque.component';
import { NewRisqueComponent } from './new-risque/new-risque.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationServiceService} from './authentication-service.service';
import {TokenStorageService} from './token-storage.service';
import {AuthInterceptor} from './_helpers/authInterceptor';
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'risque', component: RegistrationComponent},
  {path: 'new-risque' , component: NewRisqueComponent},
  {path: 'registration' , component: RegistrationComponent},
  {path: '' , redirectTo: '/login' , pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RisqueComponent,
    NewRisqueComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [
    AuthenticationServiceService, TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
