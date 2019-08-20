//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefComponentsComponent } from './brief-components.component';

describe('BriefComponentsComponent', () => {
  let component: BriefComponentsComponent;
  let fixture: ComponentFixture<BriefComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BriefComponentsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
