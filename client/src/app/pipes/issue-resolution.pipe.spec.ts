//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { IssueResolutionPipe } from './issue-resolution.pipe';

describe('IssueResolutionPipe', () => {
  it('create an instance', () => {
    const pipe = new IssueResolutionPipe();
    expect(pipe).toBeTruthy();
  });
});
