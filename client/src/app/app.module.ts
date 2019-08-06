import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { FavProjectsComponent } from './parts/fav-projects/fav-projects.component';
import { FilterComponentsComponent } from './parts/filter-components/filter-components.component';
import { FilterPriorityComponent } from './parts/filter-priority/filter-priority.component';
import { FilterResolutionComponent } from './parts/filter-resolution/filter-resolution.component';
import { FilterStatusComponent } from './parts/filter-status/filter-status.component';
import { FilterUsersComponent } from './parts/filter-users/filter-users.component';
import { FooterComponent } from './parts/footer/footer.component';
import { HeaderComponent } from './parts/header/header.component';
import { IssueInfoComponent } from './parts/issue-info/issue-info.component';
import { IssueListComponent } from './parts/issue-list/issue-list.component';
import { LoginComponent } from './parts/login/login.component';
import { LogoutComponent } from './parts/logout/logout.component';
import { ProjectCardComponent } from './parts/project-card/project-card.component';
import { ProjectInfoComponent } from './parts/project-info/project-info.component';
import { ProjectListComponent } from './parts/project-list/project-list.component';
import { ProjectSummaryComponent } from './parts/project-summary/project-summary.component';
import { IssuePriorityPipe } from './pipes/issue-priority.pipe';
import { IssueResolutionPipe } from './pipes/issue-resolution.pipe';
import { IssueStatusPipe } from './pipes/issue-status.pipe';
import { IssueTypePipe } from './pipes/issue-type.pipe';
import { ProjSelectPipe } from './pipes/proj-select.pipe';
import { AboutComponent } from './routes/about/about.component';
import { HomeComponent } from './routes/home/home.component';
import { IssueComponent } from './routes/issue/issue.component';
import { ProjectComponent } from './routes/project/project.component';
import { StrayComponent } from './routes/stray/stray.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    IssueComponent,
    StrayComponent,
    ProjectListComponent,
    ProjectInfoComponent,
    IssueListComponent,
    IssueInfoComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    FavProjectsComponent,
    ProjectCardComponent,
    ProjSelectPipe,
    IssueTypePipe,
    IssuePriorityPipe,
    IssueStatusPipe,
    IssueResolutionPipe,
    ProjectSummaryComponent,
    FilterUsersComponent,
    FilterComponentsComponent,
    FilterStatusComponent,
    FilterPriorityComponent,
    FilterResolutionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
