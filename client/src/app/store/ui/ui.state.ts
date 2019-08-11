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
  /** Waiting for action to complete */
  waiting: boolean;

  /** List of favorite issues. */
  favProjects: string[];

  /** Identifier of current project. */
  project: string;

  /** Identifier of current issue. */
  issue: string;
}

export const initUiState: UiStateModel = {
  waiting: false,
  favProjects: [],
  project: null,
  issue: null,
};

@State<UiStateModel>({
  name: 'ui',
  defaults: initUiState,
})
export class UiState {

  @Selector()
  public static getState(state: UiStateModel) {
    return state;
  }

  @Selector()
  public static isWaiting(state: UiStateModel): boolean {
    return state.waiting;
  }

  @Selector()
  public static getFavProjects(state: UiStateModel): string[] {
    return state.favProjects;
  }

  @Selector()
  public static hasFavProjects(state: UiStateModel): boolean {
    return state.favProjects.length > 0;
  }

  @Selector()
  public static getProject(state: UiStateModel): string {
    return state.project;
  }

  @Selector()
  public static getIssue(state: UiStateModel): string {
    return state.issue;
  }

  @Action(UiAction)
  public add(ctx: StateContext<UiStateModel>, { payload }: UiAction) {
  }
}
