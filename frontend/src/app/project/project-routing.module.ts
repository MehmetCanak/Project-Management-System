import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routeRules } from './route.rules';
const routes: Routes = routeRules;


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }

