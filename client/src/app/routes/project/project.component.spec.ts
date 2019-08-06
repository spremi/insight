//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ProjectComponent } from './project.component';

@Component({
  selector: 'sp-project-summary',
  template: '<span>Mock Project Summary</span>',
})
class MockProjectSummaryComponent { }

@Component({
  selector: 'sp-filter-components',
  template: '<span>Mock Filter (Components)</span>',
})
class MockFilterComponentsComponent { }

@Component({
  selector: 'sp-filter-users',
  template: '<span>Mock Filter (Users)</span>',
})
class MockFilterUsersComponent { }


describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
      ],
      declarations: [
        ProjectComponent,
        MockProjectSummaryComponent,
        MockFilterComponentsComponent,
        MockFilterUsersComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
