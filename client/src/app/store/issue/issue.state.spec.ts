//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { IssueReset } from './issue.actions';
import { initIssueState, IssueState, IssueStateModel } from './issue.state';

describe('Issue store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([IssueState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action to reset state', () => {
    const expected: IssueStateModel = initIssueState;

    store.dispatch(new IssueReset());
    const actual = store.selectSnapshot(IssueState.getState);
    expect(actual).toEqual(expected);
  });

});
