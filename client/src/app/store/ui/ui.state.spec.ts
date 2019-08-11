//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { UiReset } from './ui.actions';
import { initUiState, UiState, UiStateModel } from './ui.state';

describe('Ui store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([UiState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action to reset state', () => {
    const expected: UiStateModel = initUiState;

    store.dispatch(new UiReset());
    const actual = store.selectSnapshot(UiState.getState);
    expect(actual).toEqual(expected);
  });

});
