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
import { UserDataService } from 'src/app/services/user/user-data.service';

@Component({
  selector: 'sp-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.sass'],
})
export class FilterUsersComponent implements OnInit {
  /**
   * List of users.
   */
  list: User[];

  constructor(private userDataSvc: UserDataService) { }

  ngOnInit() {
    this.userDataSvc.getUsers('dummy-project').subscribe((result) => {
      this.list = result;
    });
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
