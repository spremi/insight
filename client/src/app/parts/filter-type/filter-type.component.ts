//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { IssueElement } from 'src/app/models/issue';
import { IssueDataService } from 'src/app/services/issue/issue-data.service';

@Component({
  selector: 'sp-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.sass'],
})
export class FilterTypeComponent implements OnInit {
  /**
   * List of issue types.
   */
  list: IssueElement[];

  constructor(private issueDataSvc: IssueDataService) { }

  ngOnInit() {
    this.issueDataSvc.getTypes().subscribe((result) => {
      this.list = result;
    });
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
