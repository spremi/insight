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
import { MaterialModule } from 'src/app/modules/material/material.module';
import { IssueComponent } from './issue.component';

@Component({
  selector: 'sp-issue-list',
  template: '<span>Mock Issue List</span>',
})
class MockIssueListComponent {
  @Input()
  view: string;
}


@Component({
  selector: 'sp-filter-type',
  template: '<span>Mock Filter (Type)</span>',
})
class MockFilterTypeComponent { }

@Component({
  selector: 'sp-filter-status',
  template: '<span>Mock Filter (Status)</span>',
})
class MockFilterStatusComponent { }

@Component({
  selector: 'sp-filter-priority',
  template: '<span>Mock Filter (Priority)</span>',
})
class MockFilterPriorityComponent { }

@Component({
  selector: 'sp-filter-resolution',
  template: '<span>Mock Filter (Resolution)</span>',
})
class MockFilterResolutionComponent { }

describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
      ],
      declarations: [
        IssueComponent,
        MockIssueListComponent,
        MockFilterTypeComponent,
        MockFilterStatusComponent,
        MockFilterPriorityComponent,
        MockFilterResolutionComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
