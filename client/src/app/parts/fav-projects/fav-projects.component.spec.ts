//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavProjectsComponent } from './fav-projects.component';

describe('FavProjectsComponent', () => {
  let component: FavProjectsComponent;
  let fixture: ComponentFixture<FavProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavProjectsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
