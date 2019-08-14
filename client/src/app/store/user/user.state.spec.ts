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
import { UserDummy } from './user.actions';
import { UserState, UserStateModel } from './user.state';

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

  it('should create an action and add an item', () => {
    const expected: UserStateModel = {
      user: null,
      token: null,
      session: null,
    };
    store.dispatch(new UserDummy());
    const actual = store.selectSnapshot(UserState.getState);
    expect(actual).toEqual(expected);
  });

});
