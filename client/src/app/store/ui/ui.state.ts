//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UiAction } from './ui.actions';

export interface UiStateModel {
  items: string[];
}

@State<UiStateModel>({
  name: 'ui',
  defaults: {
    items: [],
  },
})
export class UiState {

  @Selector()
  public static getState(state: UiStateModel) {
    return state;
  }

  @Action(UiAction)
  public add(ctx: StateContext<UiStateModel>, { payload }: UiAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
