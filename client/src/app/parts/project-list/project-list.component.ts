//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'sp-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass'],
})
export class ProjectListComponent implements OnInit {
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
      versions: [],
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
      versions: [],
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
      versions: [],
    },
    {
      id: '004',
      key: 'P004',
      name: 'Project 004',
      desc: 'Project 004 description',
      iconId: 'ico_p004',
      category: {
        id: 'cat002',
        name: 'Category 002',
        desc: 'Project category 002',
      },
      components: [],
      versions: [],
    },
    {
      id: '011',
      key: 'P011',
      name: 'Project 011',
      desc: 'Project 011 description',
      iconId: 'ico_p011',
      category: {
        id: 'cat003',
        name: 'Category 003',
        desc: 'Project category 003',
      },
      components: [],
      versions: [],
    },
  ];

  /**
   * Filter text for project name(s)
   */
  filterText: string;

  constructor() { }

  ngOnInit() {
  }
}
