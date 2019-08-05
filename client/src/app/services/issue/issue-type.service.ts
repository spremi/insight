//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Injectable } from '@angular/core';
import { of, EMPTY, Observable } from 'rxjs';
import { IssueElement } from 'src/app/models/issue';

@Injectable({
  providedIn: 'root',
})
export class IssueTypeService {
  /**
   * Dummy issue types.
   */
  private list: IssueElement[] = [
    {
      id: 'type_01',
      name: 'TYPE 01',
      desc: 'Issue type 001',
      iconId: 'type_01_icon',
    },
    {
      id: 'type_02',
      name: 'TYPE 02',
      desc: 'Issue type 002',
      iconId: 'type_02_icon',
    },
    {
      id: 'type_03',
      name: 'TYPE 03',
      desc: 'Issue type 003',
      iconId: 'type_03_icon',
    },
  ];

  constructor() { }

  /**
   * Returns observable to the 'list'.
   */
  public getAll(): Observable<IssueElement[]> {
    return of(this.list);
  }

  /**
   * Returns observable to object matching specified 'id'.
   */
  public getOne(id: string): Observable<IssueElement> {
    const issue = this.list.find(item => item.id === id);

    return issue ? of(issue) : EMPTY;
  }
}
