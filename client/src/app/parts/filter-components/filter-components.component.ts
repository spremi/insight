//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { ProjectComponent } from 'src/app/models/project';
import { ProjectDataService } from 'src/app/services/project/project-data.service';

@Component({
  selector: 'sp-filter-components',
  templateUrl: './filter-components.component.html',
  styleUrls: ['./filter-components.component.sass'],
})
export class FilterComponentsComponent implements OnInit {
  /**
   * List of components.
   */
  list: ProjectComponent[];

  constructor(private projDataSvc: ProjectDataService) { }

  ngOnInit() {
    this.projDataSvc.getComponents().subscribe((result) => {
      this.list = result;
    });
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
