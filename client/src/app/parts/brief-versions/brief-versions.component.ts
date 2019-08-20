//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IssuesByVersion } from 'src/app/models/project';
import { ProjectState } from 'src/app/store/project/project.state';

interface VersionData {
  label: string;
  count: number;
  affecting: number;
  fixed: number;
  unresolved: number;
}

@Component({
  selector: 'sp-brief-versions',
  templateUrl: './brief-versions.component.html',
  styleUrls: ['./brief-versions.component.sass'],
})
export class BriefVersionsComponent implements OnInit, OnDestroy {
  @Select(ProjectState.getIssuesByVersion) data$: Observable<IssuesByVersion[]>;

  private sub: Subscription;

  /**
   * Columns to display.
   */
  public readonly cols: string[] = [
    'label',
    'count',
    'affecting',
    'fixed',
    'unresolved',
  ];

  /**
   * Data to display.
   */
  public data: VersionData[] = [];

  /**
   * Data source for the table.
   */
  public dataSource: MatTableDataSource<VersionData>;

  constructor() { }

  ngOnInit() {
    this.sub = this.data$.pipe(
      filter((arg) => !!arg)
    ).subscribe((list: IssuesByVersion[]) => {
      list.forEach((item) => {
        this.data.push({
          label: item.version.name,
          count: item.data.count,
          affecting: item.data.affecting,
          fixed: item.data.fixed,
          unresolved: item.data.unresolved,
        });
      });
    });

    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
