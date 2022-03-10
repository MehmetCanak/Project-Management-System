import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectListComponent } from "./components/project-list/project-list.component";
import { TaskComponent } from './components/task/task.component';

import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';



@NgModule({
  declarations: [
    ProjectListComponent,
    TaskComponent,
    UsersComponent,
    NotFoundComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
