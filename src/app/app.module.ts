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
import { FullCalendarModule } from '@fullcalendar/angular';
import { EditrisqueComponent } from './component/editrisque/editrisque.component';
import { ListRecommendationComponent } from './component/list-recommendation/list-recommendation.component';
import { ListcommentaireComponent } from './component/listcommentaire/listcommentaire.component';
import { ListedeclientComponent } from './component/listedeclient/listedeclient.component';
import { ListederendezvousComponent } from './component/listederendezvous/listederendezvous.component';
import { ReclamationComponent } from './component/reclamation/reclamation.component';
import { RendezvousComponent } from './component/rendezvous/rendezvous.component';
import { AjoutcommentaireComponent } from './component/ajoutcommentaire/ajoutcommentaire.component';
import { AuthInterceptor } from './_helpers/authInterceptor';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    RegistrationComponent,
    EditrisqueComponent,
    AjoutcommentaireComponent,
    ListcommentaireComponent,
    ReclamationComponent,
    ListRecommendationComponent,
    RendezvousComponent,
    ListedeclientComponent,
    ListederendezvousComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FullCalendarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthenticationServiceService, TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
