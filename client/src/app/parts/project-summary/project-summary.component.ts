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
  selector: 'sp-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.sass'],
})
export class ProjectSummaryComponent implements OnInit {

  @Select(ProjectState.getSelected) project$: Observable<Project>;

  constructor() { }

  ngOnInit() {
  }
}
