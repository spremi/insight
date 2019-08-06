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
  selector: 'sp-filter-resolution',
  templateUrl: './filter-resolution.component.html',
  styleUrls: ['./filter-resolution.component.sass'],
})
export class FilterResolutionComponent implements OnInit {
  /**
   * List of issue resoultions.
   */
  list: IssueElement[];

  constructor(private issueDataSvc: IssueDataService) { }

  ngOnInit() {
    this.issueDataSvc.getResolutions().subscribe((result) => {
      this.list = result;
    });
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
