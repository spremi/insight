//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { Project } from 'src/app/models/project';
import { AppState } from 'src/app/store';
import { HomeComponent } from './home.component';

@Component({
  selector: 'sp-login',
  template: '<span>Mock Login</span>',
})
class MockLoginComponent { }

@Component({
  selector: 'sp-project-list',
  template: '<span>Mock Project List</span>',
})
class MockProjectListComponent {
  @Input() projects: Project[];
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot(AppState),
      ],
      declarations: [
        HomeComponent,
        MockLoginComponent,
        MockProjectListComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
