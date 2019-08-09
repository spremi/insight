//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { IssueAction } from './issue.actions';
import { IssueState, IssueStateModel } from './issue.state';

describe('Issue store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([IssueState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: IssueStateModel = {
      list: [],
      types: [],
      priorities: [],
      statuses: [],
      resolutions: [],
    };
    store.dispatch(new IssueAction('item-1'));
    const actual = store.selectSnapshot(IssueState.getState);
    expect(actual).toEqual(expected);
  });

});
