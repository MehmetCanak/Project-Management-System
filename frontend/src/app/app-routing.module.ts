import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routesRoules } from './route.rules';

const routes: Routes = routesRoules;


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
