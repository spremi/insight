//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectState } from 'src/app/store/project/project.state';

@Component({
  selector: 'sp-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
})
export class ProjectComponent implements OnInit {
  @Select(ProjectState.getSelected) proj$: Observable<Project>;

  /**
   * Was any of fixed/affected versions selected?
   */
  versionsSelected = false;

  constructor() { }

  ngOnInit() {
  }

  selectVersions() {
    console.log('TODO: Dispatch action');
    this.versionsSelected = true;
  }
}
