//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProjectVersion } from 'src/app/models/project';
import { FilterName, FilterSet } from 'src/app/store/filter/filter.actions';
import { ProjectState } from 'src/app/store/project/project.state';

@Component({
  selector: 'sp-filter-versions',
  templateUrl: './filter-versions.component.html',
  styleUrls: ['./filter-versions.component.sass'],
})
export class FilterVersionsComponent implements OnInit {
  private readonly MODE_AFFECTED = 'affected';
  private readonly MODE_FIXED = 'fixed';

  @Input()
  mode: string;

  @Select(ProjectState.getVersions) versions$: Observable<ProjectVersion[]>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  toggleVersion(selected: MatListOption[]) {
    const versions = selected.map((s) => s.value);

    switch (this.mode) {
      case this.MODE_AFFECTED:
        this.store.dispatch(new FilterSet({
          filter: FilterName.AffectedVersions,
          items: versions,
        }));
        break;

      case this.MODE_FIXED:
        this.store.dispatch(new FilterSet({
          filter: FilterName.FixVersions,
          items: versions,
        }));
        break;

      default:
        console.log('Error: filter-versions: Unknown mode');
    }
  }
}
