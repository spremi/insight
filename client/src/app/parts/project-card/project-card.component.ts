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
  selector: 'sp-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass'],
})
export class ProjectCardComponent implements OnInit {

  @Input()
  data: Project;

  constructor() { }

  ngOnInit() {
  }
}
