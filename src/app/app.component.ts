import { Component, OnInit } from '@angular/core';
import { User } from './model/User';
import { TokenStorageService } from './service/token-storage.service';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'auditappangular';
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  private user = new User();
  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {

    if (this.tokenStorageService.getToken()) {
      this.getUserConnected();
      this.username = this.user.login;
    }
  }

  getUserConnected(): void {
    if (this.tokenStorageService.getUsername()) {
      console.log('this this.tokenStorageService.getUsername()', this.tokenStorageService.getUsername());
      const username = this.tokenStorageService.getUsername();
      this.userService.getUserByUsername(username).subscribe(data => {
        this.user = data;
        if (this.user.role.findIndex((item) => item.roleName === 'ROLE_ADMIN') < 0) {
          this.showAdminBoard = true;
          console.log('-----', this.showAdminBoard);
        } else if (this.user.role.findIndex((item) => item.roleName === 'ROLE_MODERATOR') < 0) {
          this.showModeratorBoard = true;
        }
      }, error => {
      });
    }
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
