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
export class IssueResolutionService {
  /**
   * Dummy issue resolutions.
   */
  private list: IssueElement[] = [
    {
      id: 'reso_01',
      name: 'RESO 01',
      desc: 'Resolution 001',
      iconId: 'reso_01_icon',
    },
    {
      id: 'reso_02',
      name: 'RESO 02',
      desc: 'Resolution 002',
      iconId: 'reso_02_icon',
    },
    {
      id: 'reso_03',
      name: 'RESO 03',
      desc: 'Resolution 003',
      iconId: 'reso_03_icon',
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
