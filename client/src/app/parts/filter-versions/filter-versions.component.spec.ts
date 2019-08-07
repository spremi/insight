//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterVersionsComponent } from './filter-versions.component';

describe('FilterVersionsComponent', () => {
  let component: FilterVersionsComponent;
  let fixture: ComponentFixture<FilterVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterVersionsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
