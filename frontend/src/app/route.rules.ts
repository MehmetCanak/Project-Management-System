
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './project/dashboard/dashboard.component';
import { LoginComponent } from './project/login/login.component';
import { ProjectComponent } from './project/project.component';
import { ComponentsComponent } from './project/components/components.component';
import { AuthGuard } from './project/core/helpers/auth.guard';
import { TestComponent } from './project/test/test.component';

export const routesRoules = [

    // { path: '', component: TestComponent },
    { path: 'main', component: ProjectComponent},
    { path: 'login', component: LoginComponent },
    {
        path: "project",
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
    },
    { path: '', redirectTo:'project', pathMatch: 'full' },
    { path: '**', redirectTo: 'project' }
];