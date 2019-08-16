//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { AppState } from 'src/app/store';
import { FilterResolutionComponent } from './filter-resolution.component';

describe('FilterResolutionComponent', () => {
  let component: FilterResolutionComponent;
  let fixture: ComponentFixture<FilterResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        HttpClientTestingModule,
        NgxsModule.forRoot(AppState),
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
