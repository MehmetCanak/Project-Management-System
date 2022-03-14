import { Component } from '@angular/core';
import { AuthenticationService } from './project/core/services/authentication.service';
import { User } from './project/core/models/user';
import { Router } from '@angular/router';
import { SpinnerService } from './project/shared/spinner.service';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  currentUser: User;
 
  showSpinner = false;
  constructor(
    // private router: Router,
    // private authenticationService: AuthenticationService,
    private spinnerService: SpinnerService
  ) 
  {
    this.spinnerService.spinner$.subscribe((data: boolean) => {
      setTimeout(() => {
        this.showSpinner = data ? data : false;
      });
      console.log(this.showSpinner);
    });
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
