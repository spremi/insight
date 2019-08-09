//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { User } from 'src/app/models/user';
import { UserAction } from './user.actions';

export interface UserStateModel {
  user: User;
  token: string;
}

export const initUserState: UserStateModel = {
  user: null,
  token: null,
};

@State<UserStateModel>({
  name: 'user',
  defaults: initUserState,
})
export class UserState {

  @Selector()
  public static getState(state: UserStateModel) {
    return state;
  }

  @Selector()
  public static getUser(state: UserStateModel): User {
    return state.user;
  }

  @Selector()
  public static getToken(state: UserStateModel): string {
    return state.token;
  }

  @Selector()
  public static isAuthenticated(state: UserStateModel): boolean {
    return !!state.token;
  }

  @Action(UserAction)
  public add(ctx: StateContext<UserStateModel>, { payload }: UserAction) {
  }
}
