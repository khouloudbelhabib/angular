import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Risques} from '../app/model/risques';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RisquesService {
// tslint:disable-next-line:ban-types
public host: String = 'http://localhost:8090/risques/';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  public getRisqueList(url): Observable<any>{
    return this.http.get(this.host + url);
  }
  // tslint:disable-next-line:typedef
   public addRisqueToRemote( risques: Risques){
    return this.http.post('http://localhost:8090/risques/save', risques);

   }
  // tslint:disable-next-line:typedef
   public updateRisque(risques: Risques){
    return this.http.post('http://localhost:8090/risques/save', risques);
  }
  public getRisqueById( id: number): Observable<any>{
    return this.http.get('http://localhost:8090/risques/getbyid/' + id);
  }
  public deleteRisqueById( id: number): Observable<any>{
    return this.http.delete('http://localhost:8090/risques/delete/' + id);
  }
}