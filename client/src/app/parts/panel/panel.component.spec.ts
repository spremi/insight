//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { TileData } from 'src/app/models/generic';
import { PanelComponent } from './panel.component';

@Component({
  selector: 'sp-tile',
  template: '<span>Mock Tile</span>',
})
class MockTileComponent {
  @Input()
  data: TileData[];
}

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PanelComponent,
        MockTileComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
