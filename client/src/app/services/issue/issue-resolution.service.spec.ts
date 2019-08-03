//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { TestBed } from '@angular/core/testing';

import { IssueResolutionService } from './issue-resolution.service';

describe('IssueResolutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssueResolutionService = TestBed.get(IssueResolutionService);
    expect(service).toBeTruthy();
  });
});
