//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Issue } from 'src/app/models/issue';

@Component({
  selector: 'sp-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.sass'],
})
export class IssueListComponent implements OnInit, AfterViewInit {
  /**
   * List of issues.
   */
  @Input()
  issues: Issue[];

  /**
   * View mode - normal / compact.
   */
  @Input()
  view = 'normal';

  /**
   * Columns to display in normal mode.
   */
  public normalCols: string[] = [
    'key',
    'typeId',
    'priorityId',
    'statusId',
    'resolutionId',
    'action',
  ];

  /**
   * Columns to display in compact mode.
   */
  public compactCols: string[] = [
    'key',
  ];

  /**
   * Data source for the table.
   */
  public dataSource: MatTableDataSource<Issue>;

  //
  // Since data source isn't ready in ngOnInit(), 'static' is set false.
  // See: https://next.angular.io/guide/static-query-migration
  //
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.issues);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onIssueClick(id: string) {
    console.log('Issue clicked: ' + id);
  }
}
