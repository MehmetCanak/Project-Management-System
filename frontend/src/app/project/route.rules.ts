import { ProjectComponent } from './project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { TaskComponent } from './components/task/task.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routeRules = 
[{
    path: '',
    component: ProjectComponent,
    children: 
    [
        {
            path: 'dashboard',
            component: DashboardComponent,
        },
        {
            path: 'project-list',
            component: ProjectListComponent,
        },
        {
            path: 'tasks',
            component: TaskComponent,
        },
        {
            path: 'users',
            component: UsersComponent,
        },
        {
            path: '**',
            component: NotFoundComponent,
        }
    ]
}];