import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { NewRisqueComponent } from './component/new-risque/new-risque.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { RisqueComponent } from './component/risque/risque.component';
import { AuthenticationServiceService } from './service/authentication-service.service';
import { TokenStorageService } from './service/token-storage.service';

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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenStorageService,
      multi: true
    },
    AuthenticationServiceService, TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
