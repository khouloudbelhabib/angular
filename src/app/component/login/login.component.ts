import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';


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
        console.log(data.user);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.getUserConnected();
        this.reloadPage();
      },
      err => {
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
