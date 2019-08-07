//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { ProjectVersion } from 'src/app/models/project';
import { ProjectDataService } from 'src/app/services/project/project-data.service';

@Component({
  selector: 'sp-filter-versions',
  templateUrl: './filter-versions.component.html',
  styleUrls: ['./filter-versions.component.sass'],
})
export class FilterVersionsComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  projId: string;

  /**
   * List of versions.
   */
  list: ProjectVersion[];

  constructor(private projDataSvc: ProjectDataService) { }

  ngOnInit() {
    if (this.projId) {
      this.projDataSvc.getVersions(this.projId).subscribe((result) => {
        this.list = result;
      });
    }
  }

  applyFilter(selected: MatListOption[]) {
    console.log('TODO: Dispatch action');
  }
}
