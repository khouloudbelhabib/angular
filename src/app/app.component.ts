import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../service/token-storage.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'auditappangular';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  private user: any;
  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) { }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {

    if (this.tokenStorageService.getToken()) {
      this.getUserConnected();

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = this.user.username;
    }
  }
  getUserConnected(): void {
    if ( this.tokenStorageService.getUsername()) {
      console.log('this this.tokenStorageService.getUsername()', this.tokenStorageService.getUsername());

      this.user = this.userService.getUserByUsername(this.tokenStorageService.getUsername());
      console.log('this user', this.user);
      this.roles = this.user.role[0];
    }
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
