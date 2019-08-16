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
import { IssueElement } from 'src/app/models/issue';
import { FilterName, FilterSet } from 'src/app/store';
import { IssueState } from 'src/app/store/issue/issue.state';

@Component({
  selector: 'sp-filter-status',
  templateUrl: './filter-status.component.html',
  styleUrls: ['./filter-status.component.sass'],
})
export class FilterStatusComponent implements OnInit {

  @Select(IssueState.getStatuses) statuses$: Observable<IssueElement[]>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    const statuses = selected.map((s) => s.value);

    this.store.dispatch(new FilterSet({
      filter: FilterName.Statuses,
      items: statuses,
    }));
  }
}
