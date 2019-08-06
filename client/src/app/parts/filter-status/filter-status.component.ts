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
  selector: 'sp-filter-status',
  templateUrl: './filter-status.component.html',
  styleUrls: ['./filter-status.component.sass'],
})
export class FilterStatusComponent implements OnInit {
  /**
   * Dummy list of issue statuses.
   */
  list: IssueElement[] = [
    {
      id: 'stat01',
      name: 'Stat 1',
      desc: 'Status 1',
      iconId: 'stat_icon_1',
    },
    {
      id: 'stat01',
      name: 'Stat 1',
      desc: 'Status 1',
      iconId: 'stat_icon_1',
    },
    {
      id: 'stat02',
      name: 'Stat 2',
      desc: 'Status 2',
      iconId: 'stat_icon_2',
    },
    {
      id: 'stat03',
      name: 'Stat 3',
      desc: 'Status 3',
      iconId: 'stat_icon_3',
    },
    {
      id: 'stat04',
      name: 'Stat 4',
      desc: 'Status 4',
      iconId: 'stat_icon_4',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
