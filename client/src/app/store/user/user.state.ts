//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AuthSession } from 'src/app/models/remote';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDataService } from 'src/app/services/user/user-data.service';
import { ProjectFetchList } from '../project/project.actions';
import { UiFetchFavorites } from '../ui/ui.actions';
import {
  UserFetchData, UserFetchDataFailed, UserLogin,
  UserLoginFailed, UserLogout, UserReset
} from './user.actions';

export interface UserStateModel {
  user: User;
  token: string;
  session: AuthSession;
}

export const initUserState: UserStateModel = {
  user: null,
  token: null,
  session: null,
};

@State<UserStateModel>({
  name: 'user',
  defaults: initUserState,
})
export class UserState {

  constructor(private authSvc: AuthService, private userDataSvc: UserDataService) { }

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
  public static getSession(state: UserStateModel): AuthSession {
    return state.session;
  }

  @Selector()
  public static isAuthenticated(state: UserStateModel): boolean {
    return !!state.token || !!state.session;
  }

  @Action(UserReset)
  public reset(ctx: StateContext<UserStateModel>) {
    ctx.setState(initUserState);
  }

  @Action(UserLogin)
  public login(ctx: StateContext<UserStateModel>, { payload }: UserLogin) {
    return this.authSvc.login(payload.id, payload.pass).pipe(tap((result) => {
      ctx.patchState({ token: result });

      ctx.dispatch([
        new UserFetchData({ id: payload.id }),      // User details
        new ProjectFetchList(),                     // Project list
        new UiFetchFavorites(),                     // Favorite projects
      ]);
    }));
  }

  @Action(UserLoginFailed)
  public loginFailed(ctx: StateContext<UserStateModel>) {
  }

  @Action(UserLogout)
  public logout(ctx: StateContext<UserStateModel>) {
    return this.authSvc.logout().pipe(tap(() => {
      ctx.dispatch(UserReset);
    }));
  }

  @Action(UserFetchData)
  public fetchData(ctx: StateContext<UserStateModel>, { payload }: UserFetchData) {
    return this.userDataSvc.getUser(payload.id).pipe(tap((data) => {
      ctx.patchState({ user: data });
    }));
  }

  @Action(UserFetchDataFailed)
  public fetchDataFailed(ctx: StateContext<UserStateModel>) {
  }
}
