import { Component } from '@angular/core';
import { AuthenticationService } from './project/core/services/authentication.service';
import { User } from './project/core/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  currentUser: User;
  constructor(
    // private router: Router,
    // private authenticationService: AuthenticationService
  ) 
  {
      //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  // logout() {
  //   this.authenticationService.logout();
  //   this.router.navigate(['/login']);
  // }
  // get isAdmin() {
  //   return this.currentUser && this.currentUser.role === Role.Admin;
  // }
}
