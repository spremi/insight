//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPriorityComponent } from './filter-priority.component';

describe('FilterPriorityComponent', () => {
  let component: FilterPriorityComponent;
  let fixture: ComponentFixture<FilterPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterPriorityComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
