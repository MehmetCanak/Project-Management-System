import { Component, OnInit } from '@angular/core';
import { AuthService } from '../project/core/services/auth.service';
import { GeneralService } from '../project/core/services/general.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  isLoggedIn = false;
  title = environment.title;
  constructor(
    private authService: AuthService,
    private generalHelper:GeneralService,
    public router: Router
    ) { }

  ngOnInit(): void {
  }

  navigate(url: string) {
    this.router.navigateByUrl("dashboard");
    //this.generalHelper.navigate(url);
  }
  


}
