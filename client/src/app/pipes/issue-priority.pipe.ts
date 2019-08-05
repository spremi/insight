//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { IssueElement } from 'src/app/models/issue';
import { IssuePriorityService } from 'src/app/services/issue/issue-priority.service';

@Pipe({
  name: 'issuePriority',
})
export class IssuePriorityPipe implements PipeTransform {

  constructor(private svc: IssuePriorityService) { }

  transform(value: string): Observable<string> {
    return this.svc.getOne(value).pipe(
      filter(obj => !!obj),
      map((obj: IssueElement) => obj.name)
    );
  }
}
