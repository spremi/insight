//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { InfoData } from 'src/app/models/generic';

@Component({
  selector: 'sp-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass'],
})
export class InfoComponent implements OnInit {
  @Input()
  data: InfoData;

  constructor() { }

  ngOnInit() {
  }
}
