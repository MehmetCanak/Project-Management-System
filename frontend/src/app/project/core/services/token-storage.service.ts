import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { 
    
  }
  public saveToken(token: string): void {
    
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
    // return window.sessionStorage.getItem(TOKEN_KEY);
  }
  
  public saveUser(user: any): void {
    
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY,JSON.stringify(user));
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    const user1  = localStorage.getItem(USER_KEY);
    if (user1) {
      return JSON.parse(user1);
    }
    return {};
  }
  public clear(): void {
    localStorage.clear();
    window.sessionStorage.clear();
  }

  public setLoggedInUserInfo(info:any)
  {
    this.writeToLocal("loggedInUserInfo", info)
  }

  public writeToLocal(key:any, value:any) {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  
}