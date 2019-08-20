//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IssuesByComponent } from 'src/app/models/project';
import { ProjectState } from 'src/app/store/project/project.state';

interface CompData {
  comp: string;
  count: number;
}

@Component({
  selector: 'sp-brief-components',
  templateUrl: './brief-components.component.html',
  styleUrls: ['./brief-components.component.sass'],
})
export class BriefComponentsComponent implements OnInit, OnDestroy {

  @Select(ProjectState.getIssuesByComponent) data$: Observable<IssuesByComponent[]>;

  private sub: Subscription;

  /**
   * Columns to display.
   */
  public readonly cols: string[] = [
    'comp',
    'count',
  ];

  /**
   * Data to display.
   */
  public data: CompData[] = [];

  /**
   * Data source for the table.
   */
  public dataSource: MatTableDataSource<CompData>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.sub = this.data$.pipe(
      filter((arg) => !!arg)
    ).subscribe((list: IssuesByComponent[]) => {
      list.forEach((item) => {
        this.data.push({
          comp: item.component.name,
          count: item.data.count,
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
