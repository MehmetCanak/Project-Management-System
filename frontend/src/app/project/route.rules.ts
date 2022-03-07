import { ProjectComponent } from './project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routeRules = 
[{
    path: '',
    component: ProjectComponent,
    children: 
    [
        {
            path: 'dashboard',
            component: DashboardComponent,
        }
    ]
}];