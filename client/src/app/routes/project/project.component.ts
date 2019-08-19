//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TileData } from 'src/app/models/generic';
import { IssuesByVersion, Project } from 'src/app/models/project';
import { ProjectState } from 'src/app/store/project/project.state';

@Component({
  selector: 'sp-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
})
export class ProjectComponent implements OnInit, OnDestroy {
  @Select(ProjectState.getSelected) proj$: Observable<Project>;

  @Select(ProjectState.getIssuesByVersion) verIssues$: Observable<IssuesByVersion[]>;

  private sub: Subscription;

  /**
   * Was any of fixed/affected versions selected?
   */
  versionsSelected = false;

  /**
   * Data for tiles (per version).
   */
  versionTiles: TileData[] = [];

  constructor() { }

  ngOnInit() {
    this.sub = this.verIssues$.pipe(
      filter((arg) => !!arg)
    ).subscribe((list) => {
      list.forEach(item => {
        const tile: TileData = {
          title: item.version.name,
          elements: [
            {
              label: 'Count',
              value: item.data.count.toString(),
            },
            {
              label: 'Unresolved',
              value: item.data.unresolved.toString(),
            },
            {
              label: 'Affecting',
              value: item.data.affecting.toString(),
            },
            {
              label: 'Fixed',
              value: item.data.fixed.toString(),
            },
          ],
        };

        this.versionTiles.push(tile);
      });
    });
    /*
    this.versionIssues.forEach((item) => {

    });
    */
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  selectVersions() {
    console.log('TODO: Dispatch action');
    this.versionsSelected = true;
  }
}
