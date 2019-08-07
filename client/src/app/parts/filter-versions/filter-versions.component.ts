//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { ProjectVersion } from 'src/app/models/project';

@Component({
  selector: 'sp-filter-versions',
  templateUrl: './filter-versions.component.html',
  styleUrls: ['./filter-versions.component.sass'],
})
export class FilterVersionsComponent implements OnInit {
  @Input()
  title: string;

  /**
   * Dummy list of project versions.
   */
  list: ProjectVersion[] = [
    {
      id: 'vers01',
      name: 'Vers 1',
      desc: 'Version 1',
      released: true,
    },
    {
      id: 'vers01',
      name: 'Vers 1',
      desc: 'Version 1',
      released: true,
    },
    {
      id: 'vers02',
      name: 'Vers 2',
      desc: 'Version 2',
      released: true,
    },
    {
      id: 'vers03',
      name: 'Vers 3',
      desc: 'Version 3',
      released: true,
    },
    {
      id: 'vers04',
      name: 'Vers 4',
      desc: 'Version 4',
      released: false,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
