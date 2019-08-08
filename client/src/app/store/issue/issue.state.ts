//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IssueAction } from './issue.actions';

export interface IssueStateModel {
  items: string[];
}

@State<IssueStateModel>({
  name: 'issue',
  defaults: {
    items: [],
  },
})
export class IssueState {

  @Selector()
  public static getState(state: IssueStateModel) {
    return state;
  }

  @Action(IssueAction)
  public add(ctx: StateContext<IssueStateModel>, { payload }: IssueAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
