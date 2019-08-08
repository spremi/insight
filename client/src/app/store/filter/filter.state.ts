//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FilterAction } from './filter.actions';

export interface FilterStateModel {
  items: string[];
}

@State<FilterStateModel>({
  name: 'filter',
  defaults: {
    items: [],
  },
})
export class FilterState {

  @Selector()
  public static getState(state: FilterStateModel) {
    return state;
  }

  @Action(FilterAction)
  public add(ctx: StateContext<FilterStateModel>, { payload }: FilterAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
