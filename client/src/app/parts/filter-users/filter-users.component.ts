//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ProjectState } from 'src/app/store/project/project.state';

@Component({
  selector: 'sp-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.sass'],
})
export class FilterUsersComponent implements OnInit {
  @Select(ProjectState.getUsers) users$: Observable<User[]>;

  constructor() { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
