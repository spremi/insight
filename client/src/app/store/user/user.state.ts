//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserAction } from './user.actions';

export interface UserStateModel {
  items: string[];
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    items: [],
  },
})
export class UserState {

  @Selector()
  public static getState(state: UserStateModel) {
    return state;
  }

  @Action(UserAction)
  public add(ctx: StateContext<UserStateModel>, { payload }: UserAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
