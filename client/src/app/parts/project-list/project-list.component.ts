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
import { UiSetFavorites } from 'src/app/store';

@Component({
  selector: 'sp-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass'],
})
export class ProjectListComponent implements OnInit {
  @Input()
  projects: Project[];

  /**
   * Dictionary mapping project-id to checkbox state.
   */
  options: Map<string, boolean> = new Map();

  /**
   * Filter text for project name(s).
   */
  filterText: string;

  /**
   * Number of projects selected.
   */
  selected = 0;

  constructor(private store: Store) { }

  ngOnInit() {
    if (this.projects) {
      this.projects.map((project) => {
        this.options.set(project.id, false);
      });
    }
  }

  toggleProject(id: string) {
    const flag = !this.options.get(id);

    this.options.set(id, flag);

    if (flag) {
      this.selected++;
    } else {
      this.selected--;
    }
  }

  setFavorites() {
    const selection: string[] = [];

    this.options.forEach((v, k) => {
      if (v) {
        selection.push(k);
      }
    });

    this.store.dispatch(new UiSetFavorites({ projects: selection }));
  }
}
