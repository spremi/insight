//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectsComponent } from './filter-projects.component';

describe('FilterProjectsComponent', () => {
  let component: FilterProjectsComponent;
  let fixture: ComponentFixture<FilterProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterProjectsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
