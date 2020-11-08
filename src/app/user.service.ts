import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from './token-storage.service';
import {User} from './model/User';
const API_URL = 'http://localhost:8090/user/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient, private token: TokenStorageService) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getUserByUsername(username): any{
    this.headers.append('Accept', 'application/json');
    const token = this.token.getToken();
    const options = { headers: new HttpHeaders({ Authorization: 'Bearer ' + token })};
    return this.http.get(API_URL + 'getByUsername/' + username , options);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

}
