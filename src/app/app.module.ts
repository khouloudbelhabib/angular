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
import {AuthenticationServiceService} from '../service/authentication-service.service';
import {TokenStorageService} from '../service/token-storage.service';
import {AuthInterceptor} from './_helpers/authInterceptor';
import {RisquesService} from '../service/risques.service';
import { EditrisqueComponent } from './editrisque/editrisque.component';
import { AjoutcommentaireComponent } from './ajoutcommentaire/ajoutcommentaire.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListcommentaireComponent } from './listcommentaire/listcommentaire.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ListRecommendationComponent } from './list-recommendation/list-recommendation.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { ListedeclientComponent } from './listedeclient/listedeclient.component';
import { ListederendezvousComponent } from './listederendezvous/listederendezvous.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
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
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    FullCalendarModule,
  ],
  providers: [
    AuthenticationServiceService, TokenStorageService, RisquesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
