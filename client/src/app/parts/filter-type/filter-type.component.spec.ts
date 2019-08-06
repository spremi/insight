//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTypeComponent } from './filter-type.component';

describe('FilterTypeComponent', () => {
  let component: FilterTypeComponent;
  let fixture: ComponentFixture<FilterTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTypeComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
