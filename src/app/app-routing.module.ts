import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutcommentaireComponent } from './component/ajoutcommentaire/ajoutcommentaire.component';
import { EditrisqueComponent } from './component/editrisque/editrisque.component';
import { ListRecommendationComponent } from './component/list-recommendation/list-recommendation.component';
import { ListcommentaireComponent } from './component/listcommentaire/listcommentaire.component';
import { ListedeclientComponent } from './component/listedeclient/listedeclient.component';
import { LoginComponent } from './component/login/login.component';
import { NewRisqueComponent } from './component/new-risque/new-risque.component';
import { ReclamationComponent } from './component/reclamation/reclamation.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { RendezvousComponent } from './component/rendezvous/rendezvous.component';
import { RisqueComponent } from './component/risque/risque.component';




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
