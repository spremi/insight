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
import { ProjectComponent } from 'src/app/models/project';
import { ProjectState } from 'src/app/store/project/project.state';

@Component({
  selector: 'sp-filter-components',
  templateUrl: './filter-components.component.html',
  styleUrls: ['./filter-components.component.sass'],
})
export class FilterComponentsComponent implements OnInit {

  @Select(ProjectState.getComponents) comps$: Observable<ProjectComponent[]>;

  /**
   * List of components.
   */
  list: ProjectComponent[];

  constructor() { }

  ngOnInit() {
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
