import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './project/login/login.component';
import { DashboardComponent } from './project/dashboard/dashboard.component';
import { ComponentsComponent } from './project/components/components.component';
import { AuthGuard } from './project/core/helpers/auth.guard';
import { ProjectComponent } from './project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './project/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ComponentsComponent,
    ProjectComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
