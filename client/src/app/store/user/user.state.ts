//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { User } from 'src/app/models/user';
import {
  UserDummy, UserFetchData, UserFetchDataFailed,
  UserLogin, UserLoginFailed, UserLogout
} from './user.actions';

export interface UserStateModel {
  user: User;
  token: string;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null,
    token: null,
  },
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

  @Action(UserDummy)
  public dummy(ctx: StateContext<UserStateModel>) {
  }

  @Action(UserLogin)
  public login(ctx: StateContext<UserStateModel>, { payload }: UserLogin) {
  }

  @Action(UserLoginFailed)
  public loginFailed(ctx: StateContext<UserStateModel>) {
  }

  @Action(UserLogout)
  public logout(ctx: StateContext<UserStateModel>) {
  }

  @Action(UserFetchData)
  public fetchData(ctx: StateContext<UserStateModel>, { payload }: UserFetchData) {
  }

  @Action(UserFetchDataFailed)
  public fetchDataFailed(ctx: StateContext<UserStateModel>) {
  }
}
