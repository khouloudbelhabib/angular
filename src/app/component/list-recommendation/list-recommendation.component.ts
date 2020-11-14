import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from 'src/app/model/Reclamation';
import { ReclamationService } from 'src/service/reclamation.service';


@Component({
  selector: 'app-list-recommendation',
  templateUrl: './list-recommendation.component.html',
  styleUrls: ['./list-recommendation.component.css']
})
export class ListRecommendationComponent implements OnInit {
  private Reclamation;
  reclamations: Observable<Reclamation[]>;
  constructor( private reclamationService: ReclamationService) {  this.getRecommendation(); }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getRecommendation() {
    this.reclamations = this.reclamationService.listReclamationToRemote();
  }
}
