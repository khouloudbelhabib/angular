import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Risques} from '../model/risques';
import {Commentaire} from '../model/Commentaire';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public addcommentaireToRemote(commentaire: Commentaire) {
    return this.http.post('http://localhost:8090/evaluation/saveEvaluation', commentaire);
  }
  // tslint:disable-next-line:typedef
  public listcommentaireToRemote(): Observable<any> {
    return this.http.get('http://localhost:8090/evaluation/getEvaluations');
  }
}
