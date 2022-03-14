import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './../../models/project';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RestApiService } from './../../../shared/rest-api.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url = "project";
  constructor(private http: HttpClient,private rs: RestApiService) { }
  // createProject(project: any){
  //   this.rs.doRequest(this.url, "post", project).subscribe(
  //     (data: {}) => {
  //       return data;
  //     }
  //   )
  // }

  createProjects(project: any){

    var url = this.url + '/store';
    return this.rs.doHttpRequest("POST", url, project)
      .then((data) =>
      {
        console.log("ps :",data);
        return data;
      })
      .catch((err) =>
      {
        console.log(err);
      })
  }
  listProjects(project: any){
    var url = this.url + '/list';
    return this.rs.doHttpRequest("POST", url, project)
      .then((data) =>
      {
        console.log("ps :",data);
        return data;
      })
      .catch((err) =>
      {
        console.log(err);
      })
  }
}
