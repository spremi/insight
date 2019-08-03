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
  selector: 'sp-fav-projects',
  templateUrl: './fav-projects.component.html',
  styleUrls: ['./fav-projects.component.sass'],
})
export class FavProjectsComponent implements OnInit {

  @Input()
  projects: Project[];

  constructor() { }

  ngOnInit() {
  }
}
