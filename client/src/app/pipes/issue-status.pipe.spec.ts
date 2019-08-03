//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { IssueStatusPipe } from './issue-status.pipe';

describe('IssueStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new IssueStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
