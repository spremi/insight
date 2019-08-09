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
  UserFetchData, UserFetchDataFailed, UserLogin,
  UserLoginFailed, UserLogout, UserReset
} from './user.actions';

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

  @Action(UserReset)
  public reset(ctx: StateContext<UserStateModel>) {
    ctx.setState(initUserState);
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
