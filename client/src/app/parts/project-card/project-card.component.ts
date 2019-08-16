//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Project } from 'src/app/models/project';
import {
  ProjectFetchComponents, ProjectFetchData,
  ProjectFetchUsers, ProjectFetchVersions
} from 'src/app/store';
import { UiRemoveFavorite, UiSetProject } from 'src/app/store/ui/ui.actions';

@Component({
  selector: 'sp-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass'],
})
export class ProjectCardComponent implements OnInit {

  @Input()
  data: Project;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  fetchProject(id: string) {
    this.store.dispatch([
      new UiSetProject({ projectId: id }),
      new ProjectFetchData({ projectId: id }),
      new ProjectFetchVersions({ projectId: id }),
      new ProjectFetchComponents({ projectId: id }),
      new ProjectFetchUsers({ projectId: id }),
    ]);
  }

  unFavorite(id: string) {
    this.store.dispatch(new UiRemoveFavorite({ projectId: id }));
  }
}
