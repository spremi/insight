//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefVersionsComponent } from './brief-versions.component';

describe('BriefVersionsComponent', () => {
  let component: BriefVersionsComponent;
  let fixture: ComponentFixture<BriefVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BriefVersionsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
