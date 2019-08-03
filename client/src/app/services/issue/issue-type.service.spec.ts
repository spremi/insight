//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { TestBed } from '@angular/core/testing';

import { IssueTypeService } from './issue-type.service';

describe('IssueTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssueTypeService = TestBed.get(IssueTypeService);
    expect(service).toBeTruthy();
  });
});
