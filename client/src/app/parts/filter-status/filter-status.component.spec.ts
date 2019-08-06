//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStatusComponent } from './filter-status.component';

describe('FilterStatusComponent', () => {
  let component: FilterStatusComponent;
  let fixture: ComponentFixture<FilterStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterStatusComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
