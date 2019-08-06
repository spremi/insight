//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { IssueElement } from 'src/app/models/issue';

@Component({
  selector: 'sp-filter-resolution',
  templateUrl: './filter-resolution.component.html',
  styleUrls: ['./filter-resolution.component.sass'],
})
export class FilterResolutionComponent implements OnInit {
  /**
   * Dummy list of issue resolutions.
   */
  list: IssueElement[] = [
    {
      id: 'reso01',
      name: 'Reso 1',
      desc: 'Resolution 1',
      iconId: 'reso_icon_1',
    },
    {
      id: 'reso01',
      name: 'Reso 1',
      desc: 'Resolution 1',
      iconId: 'reso_icon_1',
    },
    {
      id: 'reso02',
      name: 'Reso 2',
      desc: 'Resolution 2',
      iconId: 'reso_icon_2',
    },
    {
      id: 'reso03',
      name: 'Reso 3',
      desc: 'Resolution 3',
      iconId: 'reso_icon_3',
    },
    {
      id: 'reso04',
      name: 'Reso 4',
      desc: 'Resolution 4',
      iconId: 'reso_icon_4',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
