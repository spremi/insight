//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProjectVersion } from 'src/app/models/project';
import { ProjectState } from 'src/app/store/project/project.state';

@Component({
  selector: 'sp-filter-versions',
  templateUrl: './filter-versions.component.html',
  styleUrls: ['./filter-versions.component.sass'],
})
export class FilterVersionsComponent implements OnInit {
  @Input()
  title: string;

  @Select(ProjectState.getVersions) versions$: Observable<ProjectVersion[]>;

  constructor() { }

  ngOnInit() {
  }

  toggleVersion(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
