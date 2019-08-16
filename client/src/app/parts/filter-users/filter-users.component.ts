//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { FilterName, FilterSet } from 'src/app/store/filter/filter.actions';
import { ProjectState } from 'src/app/store/project/project.state';

@Component({
  selector: 'sp-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.sass'],
})
export class FilterUsersComponent implements OnInit {
  @Select(ProjectState.getUsers) users$: Observable<User[]>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    const users = selected.map((s) => s.value);

    this.store.dispatch(new FilterSet({
      filter: FilterName.Users,
      items: users,
    }));
  }
}
