//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { TestBed } from '@angular/core/testing';

import { IssuePriorityService } from './issue-priority.service';

describe('IssuePriorityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssuePriorityService = TestBed.get(IssuePriorityService);
    expect(service).toBeTruthy();
  });
});
