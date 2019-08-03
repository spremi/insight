import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './routes/about/about.component';
import { HomeComponent } from './routes/home/home.component';
import { IssueComponent } from './routes/issue/issue.component';
import { LoginComponent } from './routes/login/login.component';
import { LogoutComponent } from './routes/logout/logout.component';
import { ProjectComponent } from './routes/project/project.component';
import { StrayComponent } from './routes/stray/stray.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'issue',
    component: IssueComponent,
  },
  {
    path: 'issue/:id',
    component: IssueComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'project/:id',
    component: ProjectComponent,
  },
  {
    path: '**',
    component: StrayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
