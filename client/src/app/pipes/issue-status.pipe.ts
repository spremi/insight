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
import { IssueElement } from '../models/issue';
import { IssueStatusService } from '../services/issue/issue-status.service';

@Pipe({
  name: 'issueStatus',
})
export class IssueStatusPipe implements PipeTransform {

  constructor(private svc: IssueStatusService) { }

  transform(value: string): Observable<string> {
    return this.svc.getOne(value).pipe(
      filter(obj => !!obj),
      map((obj: IssueElement) => obj.name)
    );
  }
}
