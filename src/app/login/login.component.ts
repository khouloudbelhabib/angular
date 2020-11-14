import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationServiceService} from '../../service/authentication-service.service';
import {resolveProvidersRequiringFactory} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import {TokenStorageService} from '../../service/token-storage.service';
import {UserService} from '../../service/user.service';
import {User} from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  user: any;
  constructor( private authService: AuthenticationServiceService , private tokenStorage: TokenStorageService,
               private userService: UserService) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      if ( this.tokenStorage.getUsername()) {
        this.getUserConnected();
      }
    }
  }
  getUserConnected(): void {
    if ( this.tokenStorage.getUsername()) {
      this.user = this.userService.getUserByUsername(this.tokenStorage.getUsername());
      this.roles = this.user.roles;
    }
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        console.log('this data data ', data);

        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.username);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.getUserConnected();
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  // tslint:disable-next-line:typedef
  reloadPage() {
    window.location.reload();
  }

}
