//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { TestBed } from '@angular/core/testing';

import { IssueDataService } from './issue-data.service';

describe('IssueDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssueDataService = TestBed.get(IssueDataService);
    expect(service).toBeTruthy();
  });
});
