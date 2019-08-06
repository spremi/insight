//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { User } from 'src/app/models/user';

@Component({
  selector: 'sp-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.sass'],
})
export class FilterUsersComponent implements OnInit {
  /**
   * Dummy list of users in project.
   */
  list: User[] = [
    {
      id: 'user01',
      name: 'User 1',
      avatarId: 'av001',
      active: true,
    },
    {
      id: 'comp02',
      name: 'User 2',
      avatarId: 'av002',
      active: true,
    },
    {
      id: 'comp03',
      name: 'User 3',
      avatarId: 'av003',
      active: true,
    },
    {
      id: 'comp04',
      name: 'User 4',
      avatarId: 'av004',
      active: true,
    },
    {
      id: 'comp05',
      name: 'User 5',
      avatarId: 'av005',
      active: true,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
