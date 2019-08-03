//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueInfoComponent } from './issue-info.component';

describe('IssueInfoComponent', () => {
  let component: IssueInfoComponent;
  let fixture: ComponentFixture<IssueInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueInfoComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
