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
export class IssueStatusService {
  /**
   * Dummy issue statuses.
   */
  private list: IssueElement[] = [
    {
      id: 'stat_01',
      name: 'STAT 01',
      desc: 'Issue status 001',
      iconId: 'stat_01_icon',
    },
    {
      id: 'stat_02',
      name: 'STAT 02',
      desc: 'Issue status 002',
      iconId: 'stat_02_icon',
    },
    {
      id: 'stat_03',
      name: 'STAT 03',
      desc: 'Issue status 003',
      iconId: 'stat_03_icon',
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
