import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from '../authentication-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor( private authService: AuthenticationServiceService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
