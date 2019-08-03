//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';

@Pipe({
  name: 'projSelect',
})
export class ProjSelectPipe implements PipeTransform {

  transform(projects: Project[], arg: string): Project[] {
    if (!projects) {
      return [];
    }

    if (!arg) {
      return projects;
    }

    return projects.filter(project => {
      return project.key.toLowerCase().includes(arg);
    });
  }
}
