import { Component, OnInit, Input } from '@angular/core';
import {  FormGroup,FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from './../../shared/rest-api.service';
import { ProjectsService } from './../../core/services/general/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  
  addProjectForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });
  addFileForm = this.fb.group({
    file: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private restApi: RestApiService, 
              public router: Router,
              private ps: ProjectsService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    
    this.ps.createProjects(this.addProjectForm.value)
    .then((data) =>
    {
     console.log("pl :",data);
     this.reset();
    
    })
    .catch((err) =>
    {
      console.log(err);
    })
    // TODO: Use EventEmitter with form value
    console.log(this.addProjectForm.value);

  }
  // updateProfile() {
  //   this.profileForm.patchValue({
  //     name: 'Mehmet',
  //     description : 'I am a software engineer'
  //   });
  // }
 
  reset() {
    this.addProjectForm.reset();
  }
  onSubmitFile() {
    console.log("submit file");
    console.log(this.addFileForm.value);
  }
}
