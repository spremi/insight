//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Issue, IssueElement } from 'src/app/models/issue';

@Injectable({
  providedIn: 'root',
})
export class IssueDataService {
  /**
   * Dummy issue list.
   */
  readonly issues: Issue[] = [
    {
      id: 'is_001',
      key: 'IS_001',
      summary: 'Issue 01',
      desc: 'This is issue 01.',
      typeId: 'type_01',
      priorityId: 'prio_00',
      statusId: 'stat_02',
      resolutionId: 'reso_04',
    },
    {
      id: 'is_002',
      key: 'IS_002',
      summary: 'Issue 02',
      desc: 'This is issue 02.',
      typeId: 'type_01',
      priorityId: 'prio_01',
      statusId: 'stat_01',
      resolutionId: 'reso_02',
    },
    {
      id: 'is_003',
      key: 'IS_003',
      summary: 'Issue 03',
      desc: 'This is issue 03.',
      typeId: 'type_03',
      priorityId: 'prio_02',
      statusId: 'stat_02',
      resolutionId: 'reso_01',
    },
    {
      id: 'is_004',
      key: 'IS_004',
      summary: 'Issue 04',
      desc: 'This is issue 04.',
      typeId: 'type_02',
      priorityId: 'prio_01',
      statusId: 'stat_01',
      resolutionId: 'reso_02',
    },
    {
      id: 'is_005',
      key: 'IS_005',
      summary: 'Issue 05',
      desc: 'This is issue 05.',
      typeId: 'type_03',
      priorityId: 'prio_03',
      statusId: 'stat_03',
      resolutionId: 'reso_00',
    },
  ];

  /**
   * Dummy list of issue types.
   */
  readonly types: IssueElement[] = [
    {
      id: 'type_01',
      name: 'Type 1',
      desc: 'Type Type 1',
      iconId: 'type_icon_1',
    },
    {
      id: 'type_02',
      name: 'Type 2',
      desc: 'Type Type 2',
      iconId: 'type_icon_1',
    },
    {
      id: 'type_03',
      name: 'Type 3',
      desc: 'Type Type 3',
      iconId: 'type_icon_3',
    },
  ];

  /**
   * Dummy list of issue priorities.
   */
  readonly priorities: IssueElement[] = [
    {
      id: 'prio01',
      name: 'Prio 1',
      desc: 'Priority 1',
      iconId: 'prio_icon_1',
    },
    {
      id: 'prio01',
      name: 'Prio 1',
      desc: 'Priority 1',
      iconId: 'prio_icon_1',
    },
    {
      id: 'prio02',
      name: 'Prio 2',
      desc: 'Priority 2',
      iconId: 'prio_icon_2',
    },
    {
      id: 'prio03',
      name: 'Prio 3',
      desc: 'Priority 3',
      iconId: 'prio_icon_3',
    },
    {
      id: 'prio04',
      name: 'Prio 4',
      desc: 'Priority 4',
      iconId: 'prio_icon_4',
    },
  ];

  /**
   * Dummy list of issue statuses.
   */
  readonly statuses: IssueElement[] = [
    {
      id: 'stat01',
      name: 'Stat 1',
      desc: 'Status 1',
      iconId: 'stat_icon_1',
    },
    {
      id: 'stat01',
      name: 'Stat 1',
      desc: 'Status 1',
      iconId: 'stat_icon_1',
    },
    {
      id: 'stat02',
      name: 'Stat 2',
      desc: 'Status 2',
      iconId: 'stat_icon_2',
    },
    {
      id: 'stat03',
      name: 'Stat 3',
      desc: 'Status 3',
      iconId: 'stat_icon_3',
    },
    {
      id: 'stat04',
      name: 'Stat 4',
      desc: 'Status 4',
      iconId: 'stat_icon_4',
    },
  ];

  /**
   * Dummy list of issue resolutions.
   */
  readonly resolutions: IssueElement[] = [
    {
      id: 'reso01',
      name: 'Reso 1',
      desc: 'Resolution 1',
      iconId: 'reso_icon_1',
    },
    {
      id: 'reso01',
      name: 'Reso 1',
      desc: 'Resolution 1',
      iconId: 'reso_icon_1',
    },
    {
      id: 'reso02',
      name: 'Reso 2',
      desc: 'Resolution 2',
      iconId: 'reso_icon_2',
    },
    {
      id: 'reso03',
      name: 'Reso 3',
      desc: 'Resolution 3',
      iconId: 'reso_icon_3',
    },
    {
      id: 'reso04',
      name: 'Reso 4',
      desc: 'Resolution 4',
      iconId: 'reso_icon_4',
    },
  ];

  constructor() { }

  /**
   * Fetch data for specific issue.
   */
  getIssue(id: string): Observable<Issue> {
    return of(this.issues[0]);
  }

  /**
   * Fetch data for all issues in current ptoject.
   */
  getIssues(): Observable<Issue[]> {
    return of(this.issues);
  }

  /**
   * Fetch list of issue types.
   */
  getTypes(): Observable<IssueElement[]> {
    return of(this.types);
  }

  /**
   * Fetch list of issue priorities.
   */
  getPriorities(): Observable<IssueElement[]> {
    return of(this.priorities);
  }

  /**
   * Fetch list of issue statuses.
   */
  getStatuses(): Observable<IssueElement[]> {
    return of(this.statuses);
  }

  /**
   * Fetch list of issue resolutions.
   */
  getResolutions(): Observable<IssueElement[]> {
    return of(this.resolutions);
  }
}
