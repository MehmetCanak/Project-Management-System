import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BaseHelper } from './../core/helpers/base';
import { TokenStorageService } from './../core/services/token-storage.service';


import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  url = BaseHelper.backendBaseUrl;
  token = {'token':this.tokenStorage.getToken()};
  httpOptions = {
    headers: new HttpHeaders(
      BaseHelper.header
      ),
    };

    // apiURL = 'http://localhost:3000';
    constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

    // doRequest(urlPath: string, method: string, data: any) {
    //   return this.http
    //     .request(method, this.url + urlPath, {
    //       body: data,
    //       responseType: 'json',
    //       headers: new HttpHeaders(BaseHelper.header)
    //     })  
    //     .pipe(retry(1), catchError(this.handleError));
    // }
    public async doHttpRequest(type: string, url: string, data: object = {})
    {
      url= this.url + url;
      console.log("url",url);
      const mergedObject = {
        ...this.token,
        ...data
      };
      console.log("mergedObject",mergedObject,"url",url,"type",type);
      return new Promise((resolve, reject) =>
      {
        this.getHttpObject(type, url, mergedObject)
        .subscribe( 
        response => 
        {
          resolve(response);
        },
        error =>
        {
          reject(error.message);
        });
      });

    }
    // Error handling
    handleError(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(() => {
        return errorMessage;
      });
    }
    private getHttpObject(type:string, url:string, data:object)
    {
      switch (type) 
      {
        case "GET": 
          url = this.dataInjectionInUrl(url, data);
          return this.http.get(url);
        case "POST": return this.http.post(url, data);
        case "PUT": return this.http.put(url, data);
        case "DELETE": return this.http.delete(url, data);
        default: url = this.dataInjectionInUrl(url, data);
                return this.http.get(url);;
      }
    }
    private dataInjectionInUrl(url:string, data:any)
    {
      if(data == null) return url;

      if(url.indexOf('?') == -1) url += "?";

      var keys = Object.keys(data);
      for(var i = 0; i < keys.length; i++)
        url += keys[i] + "=" + data[keys[i]] + "&";

      return encodeURI(url);
    }
    
    /*========================================
    CRUD Methods for consuming RESTful API
    =========================================*/
    // Http Options
    // HttpClient API get() method => Fetch employees list
    // getEmployees(): Observable<Employee> {
      //   return this.http
      //     .get<Employee>(this.apiURL + '/employees')
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // // HttpClient API get() method => Fetch employee
  // getEmployee(id: any): Observable<Employee> {
  //   return this.http
  //     .get<Employee>(this.apiURL + '/employees/' + id)
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // // HttpClient API post() method => Create employee
  // createEmployee(employee: any): Observable<Employee> {
  //   return this.http
  //     .post<Employee>(
  //       this.apiURL + '/employees',
  //       JSON.stringify(employee),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // // HttpClient API put() method => Update employee
  // updateEmployee(id: any, employee: any): Observable<Employee> {
  //   return this.http
  //     .put<Employee>(
  //       this.apiURL + '/employees/' + id,
  //       JSON.stringify(employee),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // // HttpClient API delete() method => Delete employee
  // deleteEmployee(id: any) {
  //   return this.http
  //     .delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
  //     .pipe(retry(1), catchError(this.handleError));
  // }
 
}
