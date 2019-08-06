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
  selector: 'sp-filter-priority',
  templateUrl: './filter-priority.component.html',
  styleUrls: ['./filter-priority.component.sass'],
})
export class FilterPriorityComponent implements OnInit {
  /**
   * List of issue priorities.
   */
  list: IssueElement[];

  constructor(private issueDataSvc: IssueDataService) { }

  ngOnInit() {
    this.issueDataSvc.getPriorities().subscribe((result) => {
      this.list = result;
    });
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
