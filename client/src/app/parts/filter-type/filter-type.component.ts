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
import { IssueState } from 'src/app/store';

@Component({
  selector: 'sp-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.sass'],
})
export class FilterTypeComponent implements OnInit {

  @Select(IssueState.getTypes) types$: Observable<IssueElement[]>;

  constructor() { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
