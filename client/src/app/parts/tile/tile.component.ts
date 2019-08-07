//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { TileData } from 'src/app/models/generic';

@Component({
  selector: 'sp-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.sass'],
})
export class TileComponent implements OnInit {
  @Input()
  data: TileData;

  constructor() { }

  ngOnInit() {
  }
}
