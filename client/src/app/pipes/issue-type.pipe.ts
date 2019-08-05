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
import { IssueTypeService } from 'src/app/services/issue/issue-type.service';

@Pipe({
  name: 'issueType',
})
export class IssueTypePipe implements PipeTransform {

  constructor(private svc: IssueTypeService) { }

  transform(value: string): Observable<string> {
    return this.svc.getOne(value).pipe(
      filter(obj => !!obj),
      map((obj: IssueElement) => obj.name)
    );
  }
}
