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
export class IssuePriorityService {
  /**
   * Dummy issue priority.
   */
  private list: IssueElement[] = [
    {
      id: 'prio_01',
      name: 'PRIO 01',
      desc: 'Priority 001',
      iconId: 'prio_01_icon',
    },
    {
      id: 'prio_02',
      name: 'PRIO 02',
      desc: 'Priority 002',
      iconId: 'prio_02_icon',
    },
    {
      id: 'prio_03',
      name: 'PRIO 03',
      desc: 'Priority 003',
      iconId: 'prio_03_icon',
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
