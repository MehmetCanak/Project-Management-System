import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor( 
    public router: Router,
  ) { }
  public navigate(page:string, newPage = false)
  {
    
    this.router.navigateByUrl(page);
  }
}
