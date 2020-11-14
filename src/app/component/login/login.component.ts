import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD:src/app/component/login/login.component.ts
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

=======
import {NgForm} from '@angular/forms';
import {AuthenticationServiceService} from '../../service/authentication-service.service';
import {resolveProvidersRequiringFactory} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import {TokenStorageService} from '../../service/token-storage.service';
import {UserService} from '../../service/user.service';
import {User} from '../model/User';
>>>>>>> 5cd801a788f6e6378b21543ae95280a96747ec4a:src/app/login/login.component.ts

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

  onSubmit(): void {
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

  getUserConnected(): void {
    if ( this.tokenStorage.getUsername()) {
      this.user = this.userService.getUserByUsername(this.tokenStorage.getUsername());
      this.roles = this.user.roles;
    }
  }
}
