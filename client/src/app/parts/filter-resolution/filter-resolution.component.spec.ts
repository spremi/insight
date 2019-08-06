//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterResolutionComponent } from './filter-resolution.component';

describe('FilterResolutionComponent', () => {
  let component: FilterResolutionComponent;
  let fixture: ComponentFixture<FilterResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterResolutionComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
