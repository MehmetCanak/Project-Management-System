import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
const AUTH_API = 'http://192.168.3.41/api/v1/';//http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  response:any;
  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login' , {
      email,
      password
    }, httpOptions);
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
  signOut(token:string):Observable<any> {
    return this.http.post(AUTH_API + 'logout' , {
      token,
    }, httpOptions);
    
  }
  getLoggedInUserInfo(token:any) {
    var url = AUTH_API + 'user';
    token = {'token':token};
    return new Promise((resolve, reject) =>
    {
        return this.doRequest(url, token)
        .subscribe( 
          response => 
          {
            this.tokenStorage.setLoggedInUserInfo(response);
              resolve("success");
              return response;
          },
          error =>
          {
            reject("error");
          });
    });
      
   
  }
  doRequest(url:string,data:any):Observable<any> 
  {
    return this.http.post(url, data, httpOptions);
  }
  
}