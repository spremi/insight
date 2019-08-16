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
  selector: 'sp-filter-resolution',
  templateUrl: './filter-resolution.component.html',
  styleUrls: ['./filter-resolution.component.sass'],
})
export class FilterResolutionComponent implements OnInit {

  @Select(IssueState.getResolutions) resolutions$: Observable<IssueElement[]>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    const resolutions = selected.map((s) => s.value);

    this.store.dispatch(new FilterSet({
      filter: FilterName.Resolutions,
      items: resolutions,
    }));
  }
}
