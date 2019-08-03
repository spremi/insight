//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'sp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  /**
   * Dummy project list. Only necessary fields are populated.
   */
  public projects: Project[] = [
    {
      id: '001',
      key: 'P001',
      name: 'Project 001',
      desc: 'Project 001 description',
      iconId: 'ico_p001',
      category: {
        id: 'cat001',
        name: 'Category 001',
        desc: 'Project category 001',
      },
      components: [],
    },
    {
      id: '002',
      key: 'P002',
      name: 'Project 002',
      desc: 'Project 002 description',
      iconId: 'ico_p002',
      category: {
        id: 'cat001',
        name: 'Category 001',
        desc: 'Project category 001',
      },
      components: [],
    },
    {
      id: '003',
      key: 'P003',
      name: 'Project 003',
      desc: 'Project 003 description',
      iconId: 'ico_p003',
      category: {
        id: 'cat002',
        name: 'Category 002',
        desc: 'Project category 002',
      },
      components: [],
    },
  ];

  /**
   * Dummy issue list. Only necessary fields are populated.
   */
  public issues: Issue[] = [
    {
      id: 'is_001',
      key: 'IS_001',
      summary: 'Issue 01',
      desc: 'This is issue 01.',
      typeId: 'type_01',
      priorityId: 'prio_00',
      statusId: 'stat_02',
      resolutionId: 'reso_04',
    },
    {
      id: 'is_002',
      key: 'IS_002',
      summary: 'Issue 02',
      desc: 'This is issue 02.',
      typeId: 'type_01',
      priorityId: 'prio_01',
      statusId: 'stat_01',
      resolutionId: 'reso_02',
    },
    {
      id: 'is_003',
      key: 'IS_003',
      summary: 'Issue 03',
      desc: 'This is issue 03.',
      typeId: 'type_03',
      priorityId: 'prio_02',
      statusId: 'stat_02',
      resolutionId: 'reso_01',
    },
    {
      id: 'is_004',
      key: 'IS_004',
      summary: 'Issue 04',
      desc: 'This is issue 04.',
      typeId: 'type_02',
      priorityId: 'prio_01',
      statusId: 'stat_01',
      resolutionId: 'reso_02',
    },
    {
      id: 'is_005',
      key: 'IS_005',
      summary: 'Issue 05',
      desc: 'This is issue 05.',
      typeId: 'type_05',
      priorityId: 'prio_03',
      statusId: 'stat_03',
      resolutionId: 'reso_00',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
