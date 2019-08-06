//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUsersComponent } from './filter-users.component';

describe('FilterUsersComponent', () => {
  let component: FilterUsersComponent;
  let fixture: ComponentFixture<FilterUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterUsersComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
