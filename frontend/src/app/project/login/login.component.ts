import { Component, OnInit } from '@angular/core';

import { AuthService } from '../core/services/auth.service';
import { TokenStorageService } from '../core/services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = false;
    public baseUrl = "";

    public user = 
    {
        "email": "m@mail.com",
        "password": "123456"
    };
    
    public isNative = null;
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  token: string | null = '';
  constructor(private authService: AuthService,private tokenStorage: TokenStorageService) { } //private authService: AuthService, private tokenStorage: TokenStorageService
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }
  login(){
    this.loading = true;
    this.authService.login(this.user.email,this.user.password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
      );
      console.log("token",this.tokenStorage.getToken());
      console.log("user",this.tokenStorage.getUser());
    }
    logout() {  

      this.token = this.tokenStorage.getToken();
      console.log("token",this.token);
      if(this.token){
        this.authService.signOut(this.token).subscribe(
          data => {
            // this.tokenStorage.saveToken(data.access_token);
            // this.tokenStorage.saveUser(data);
            this.tokenStorage.clear();
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            console.log(data.message);
            alert(data.message);
          },
          err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          }
          );
          console.log("token",this.tokenStorage.getToken());
          console.log("user",this.tokenStorage.getUser());
          this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
      
    }
  reloadPage(): void {
    window.location.reload();
  }
}
