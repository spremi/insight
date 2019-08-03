//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { IssuePriorityPipe } from './issue-priority.pipe';

describe('IssuePriorityPipe', () => {
  it('create an instance', () => {
    const pipe = new IssuePriorityPipe();
    expect(pipe).toBeTruthy();
  });
});
