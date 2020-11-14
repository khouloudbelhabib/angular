import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {RisqueComponent} from './risque/risque.component';
import {NewRisqueComponent} from './new-risque/new-risque.component';
import {EditrisqueComponent} from './editrisque/editrisque.component';
import {AjoutcommentaireComponent} from './ajoutcommentaire/ajoutcommentaire.component';
import {ListcommentaireComponent} from './listcommentaire/listcommentaire.component';
import {ReclamationComponent} from './reclamation/reclamation.component';
import {ListRecommendationComponent} from './list-recommendation/list-recommendation.component';
import {RendezvousComponent} from './rendezvous/rendezvous.component';
import {ListedeclientComponent} from './listedeclient/listedeclient.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'risques', component: RisqueComponent },
  { path: 'newrisque' , component: NewRisqueComponent},
  { path: 'editrisque', component: EditrisqueComponent},
  { path: 'editrisque/:id', component: EditrisqueComponent},
  { path: 'ajoutcommentaire', component: AjoutcommentaireComponent},
  { path: 'listCommentaire', component: ListcommentaireComponent},
  { path: 'ajoutReclamation', component: ReclamationComponent},
  { path: 'ListReclamation', component: ListRecommendationComponent},
  { path: 'ajoutrendezvous', component: RendezvousComponent},
  { path: 'listdeclient', component: ListedeclientComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
