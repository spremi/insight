//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { ProjectComponent } from 'src/app/models/project';

@Component({
  selector: 'sp-filter-components',
  templateUrl: './filter-components.component.html',
  styleUrls: ['./filter-components.component.sass'],
})
export class FilterComponentsComponent implements OnInit {
  /**
   * Dummy list of project components
   */
  list: ProjectComponent[] = [
    {
      id: 'comp01',
      name: 'Component 1',
    },
    {
      id: 'comp02',
      name: 'Component 2',
    },
    {
      id: 'comp03',
      name: 'Component 3',
    },
    {
      id: 'comp04',
      name: 'Component 4',
    },
    {
      id: 'comp05',
      name: 'Component 5',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
