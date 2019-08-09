//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { FilterAction } from './filter.actions';
import { FilterState, FilterStateModel } from './filter.state';

describe('Filter store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([FilterState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: FilterStateModel = {
      components: [],
      users: [],
      statuses: [],
      priorities: [],
      resolutions: [],
      fixVersions: [],
      affectedVersions: [],
    };
    store.dispatch(new FilterAction('item-1'));
    const actual = store.selectSnapshot(FilterState.getState);
    expect(actual).toEqual(expected);
  });

});
