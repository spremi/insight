//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Project } from 'src/app/models/project';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FavProjectsComponent } from './fav-projects.component';

@Component({
  selector: 'sp-project-card',
  template: '<span>Mock Project Card</span>',
})
class MockProjectCardComponent {
  @Input()
  data: Project;
}

describe('FavProjectsComponent', () => {
  let component: FavProjectsComponent;
  let fixture: ComponentFixture<FavProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
      ],
      declarations: [
        FavProjectsComponent,
        MockProjectCardComponent,
      ],
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
