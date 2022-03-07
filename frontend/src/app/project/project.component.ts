import { Component, OnInit } from '@angular/core';
import { AuthService } from '../project/core/services/auth.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  isLoggedIn = false;
  title = environment.title;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  


}
