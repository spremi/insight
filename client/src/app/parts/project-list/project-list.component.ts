//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

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

  constructor() { }

  ngOnInit() {
    this.projects.map((project) => {
      this.options.set(project.id, false);
    });
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

    console.log('Dispatch action');
    console.log(selection);
  }
}
