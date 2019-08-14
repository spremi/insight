//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { UserReset } from './user.actions';
import { initUserState, UserState, UserStateModel } from './user.state';

describe('User store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot([UserState]),
      ],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action to reset state', () => {
    const expected: UserStateModel = initUserState;

    store.dispatch(new UserReset());
    const actual = store.selectSnapshot(UserState.getState);
    expect(actual).toEqual(expected);
  });

});
