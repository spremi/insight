//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ProjectAction } from './project.actions';

export interface ProjectStateModel {
  items: string[];
}

@State<ProjectStateModel>({
  name: 'project',
  defaults: {
    items: [],
  },
})
export class ProjectState {

  @Selector()
  public static getState(state: ProjectStateModel) {
    return state;
  }

  @Action(ProjectAction)
  public add(ctx: StateContext<ProjectStateModel>, { payload }: ProjectAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
