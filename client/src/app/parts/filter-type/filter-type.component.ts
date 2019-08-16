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
import { FilterName, FilterSet, IssueState } from 'src/app/store';

@Component({
  selector: 'sp-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.sass'],
})
export class FilterTypeComponent implements OnInit {

  @Select(IssueState.getTypes) types$: Observable<IssueElement[]>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    const types = selected.map((s) => s.value);

    this.store.dispatch(new FilterSet({
      filter: FilterName.Types,
      items: types,
    }));
  }
}
