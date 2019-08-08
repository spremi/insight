//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { UiAction } from './ui.actions';
import { UiState, UiStateModel } from './ui.state';

describe('Ui store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([UiState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: UiStateModel = {
      items: ['item-1'],
    };
    store.dispatch(new UiAction('item-1'));
    const actual = store.selectSnapshot(UiState.getState);
    expect(actual).toEqual(expected);
  });

});
