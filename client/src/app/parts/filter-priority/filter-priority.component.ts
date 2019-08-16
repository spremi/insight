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
import { IssueElement } from 'src/app/models/issue';
import { IssueState } from 'src/app/store/issue/issue.state';

@Component({
  selector: 'sp-filter-priority',
  templateUrl: './filter-priority.component.html',
  styleUrls: ['./filter-priority.component.sass'],
})
export class FilterPriorityComponent implements OnInit {

  @Select(IssueState.getPriorities) priorities$: Observable<IssueElement[]>;

  constructor() { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
