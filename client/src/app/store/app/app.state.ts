//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AppAction } from './app.actions';

export interface AppStateModel {
  items: string[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    items: [],
  },
})
export class AppState {

  @Selector()
  public static getState(state: AppStateModel) {
    return state;
  }

  @Action(AppAction)
  public add(ctx: StateContext<AppStateModel>, { payload }: AppAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
