//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { FilterReset } from './filter.actions';
import { initFilterState, FilterState, FilterStateModel } from './filter.state';

describe('Filter store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([FilterState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action to reset state', () => {
    const expected: FilterStateModel = initFilterState;

    store.dispatch(new FilterReset());
    const actual = store.selectSnapshot(FilterState.getState);
    expect(actual).toEqual(expected);
  });

});
