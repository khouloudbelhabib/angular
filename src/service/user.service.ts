import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from './token-storage.service';
<<<<<<< HEAD:src/app/service/user.service.ts
=======
import {User} from '../app/model/User';
>>>>>>> 5cd801a788f6e6378b21543ae95280a96747ec4a:src/service/user.service.ts
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

  getUserByUsername(username): Observable<any> {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    console.log('username   ', username);

    return this.http.get(API_URL + 'getByUsername/' + username , options);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

}
