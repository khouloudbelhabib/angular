import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import {Risques} from '../model/risques';

@Injectable({
  providedIn: 'root'
})
export class RisquesService {
// tslint:disable-next-line:ban-types
public host: String = 'http://localhost:8090/risques/';
headers = new HttpHeaders();

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  public getRisqueList(): Observable<any>{
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.host +'get',options);
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
