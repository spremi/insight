import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './parts/footer/footer.component';
import { HeaderComponent } from './parts/header/header.component';
import { IssueInfoComponent } from './parts/issue-info/issue-info.component';
import { IssueListComponent } from './parts/issue-list/issue-list.component';
import { LoginComponent } from './parts/login/login.component';
import { LogoutComponent } from './parts/logout/logout.component';
import { ProjectInfoComponent } from './parts/project-info/project-info.component';
import { ProjectListComponent } from './parts/project-list/project-list.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
