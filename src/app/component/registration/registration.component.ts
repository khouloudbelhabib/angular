import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD:src/app/component/registration/registration.component.ts
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
=======
import {AuthenticationServiceService} from '../../service/authentication-service.service';
>>>>>>> 5cd801a788f6e6378b21543ae95280a96747ec4a:src/app/registration/registration.component.ts

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
