//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ProjectState } from 'src/app/store';
import { ProjectComponent } from './project.component';

@Component({
  selector: 'sp-tile',
  template: '<span>Mock Tile</span>',
})
class MockTileComponent {
  @Input() data: any;
}

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

@Component({
  selector: 'sp-filter-versions',
  template: '<span>Mock Filter (Versions)</span>',
})
class MockFilterVersionsComponent { }

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        NgxsModule.forRoot([ProjectState]),
      ],
      declarations: [
        ProjectComponent,
        MockTileComponent,
        MockProjectSummaryComponent,
        MockFilterComponentsComponent,
        MockFilterUsersComponent,
        MockFilterVersionsComponent,
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
