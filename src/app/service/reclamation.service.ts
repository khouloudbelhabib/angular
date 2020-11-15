import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Commentaire} from '../model/Commentaire';
import {Observable} from 'rxjs';
import {Reclamation} from '../model/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public addreclamationToRemote(reclamation: Reclamation){
    return this.http.post('http://localhost:8090/reclamation/saveReclamation', reclamation);
  }
// tslint:disable-next-line:typedef
  public listReclamationToRemote(): Observable<any> {
    return this.http.get('http://localhost:8090/reclamation/getReclamations');
  }
}
