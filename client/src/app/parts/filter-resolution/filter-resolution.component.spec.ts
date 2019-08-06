//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FilterResolutionComponent } from './filter-resolution.component';

describe('FilterResolutionComponent', () => {
  let component: FilterResolutionComponent;
  let fixture: ComponentFixture<FilterResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
      ],
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
