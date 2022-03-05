import { Component, OnInit } from '@angular/core';

import { AuthService } from '../core/services/auth.service';
import { TokenStorageService } from '../core/services/token-storage.service';
import { NotificationsService } from '../core/helpers/notifications.service';
import { BaseHelper } from '../core/helpers/base';
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
  constructor(private authService: AuthService,private tokenStorage: TokenStorageService,private ns :NotificationsService) { } //private authService: AuthService, private tokenStorage: TokenStorageService
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  login(){
    this.loading = true;
    this.authService.login(this.user.email,this.user.password).subscribe(
      data => {
        if(data.status == "success"){
          this.tokenStorage.saveToken(data.access_token);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.token = this.tokenStorage.getToken();
          this.authService.getLoggedInUserInfo(this.token)
            .then(
              (val) =>
                {
                    this.loading = false;
                    console.log("response",val);
                    this.ns.toastMessage("Giriş Başarılı","success");
                    //window.location.href = BaseHelper.dashboardUrl;
                })
            .catch(
              (err) =>
                {
                  console.log("data",err);
                  this.ns.toastMessage(err.message,"warning");
                  this.loading = false;
                });
        }else{
          this.errorMessage = data.error.message;
          console.log(data.error.message);
          this.ns.toastMessage(this.errorMessage,"warning");
        }
      },
      err => {
        //console.log(err.message);
        this.ns.toastMessage(err.message,"warning");
        }
      );

    }
    logout() {  

      this.token = this.tokenStorage.getToken();
      console.log("token",this.token);
      if(this.token){
        this.authService.signOut(this.token).subscribe(
          data => {
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
