//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { TestBed } from '@angular/core/testing';

import { IssueStatusService } from './issue-status.service';

describe('IssueStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssueStatusService = TestBed.get(IssueStatusService);
    expect(service).toBeTruthy();
  });
});
