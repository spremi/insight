//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { PanelData } from 'src/app/models/generic';

@Component({
  selector: 'sp-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass'],
})
export class PanelComponent implements OnInit {
  @Input()
  data: PanelData;

  constructor() { }

  ngOnInit() {
  }

}
