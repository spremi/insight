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
  selector: 'sp-filter-priority',
  templateUrl: './filter-priority.component.html',
  styleUrls: ['./filter-priority.component.sass'],
})
export class FilterPriorityComponent implements OnInit {
  /**
   * Dummy list of issue priorities.
   */
  list: IssueElement[] = [
    {
      id: 'prio01',
      name: 'Prio 1',
      desc: 'Priority 1',
      iconId: 'prio_icon_1',
    },
    {
      id: 'prio01',
      name: 'Prio 1',
      desc: 'Priority 1',
      iconId: 'prio_icon_1',
    },
    {
      id: 'prio02',
      name: 'Prio 2',
      desc: 'Priority 2',
      iconId: 'prio_icon_2',
    },
    {
      id: 'prio03',
      name: 'Prio 3',
      desc: 'Priority 3',
      iconId: 'prio_icon_3',
    },
    {
      id: 'prio04',
      name: 'Prio 4',
      desc: 'Priority 4',
      iconId: 'prio_icon_4',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
