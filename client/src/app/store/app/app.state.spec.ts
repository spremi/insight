//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppAction } from './app.actions';
import { AppState, AppStateModel } from './app.state';

describe('App store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: AppStateModel = {
      items: ['item-1'],
    };
    store.dispatch(new AppAction('item-1'));
    const actual = store.selectSnapshot(AppState.getState);
    expect(actual).toEqual(expected);
  });

});
