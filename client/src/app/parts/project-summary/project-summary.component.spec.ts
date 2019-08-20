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
import { ProjectSummaryComponent } from './project-summary.component';

@Component({
  selector: 'sp-brief-versions',
  template: '<span>Mock Summary Versions</span>',
})
class MockBriefVersionsComponent { }

@Component({
  selector: 'sp-brief-components',
  template: '<span>Mock Summary Components</span>',
})
class MockBriefComponentsComponent { }

describe('ProjectSummaryComponent', () => {
  let component: ProjectSummaryComponent;
  let fixture: ComponentFixture<ProjectSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
      ],
      declarations: [
        ProjectSummaryComponent,
        MockBriefVersionsComponent,
        MockBriefComponentsComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
