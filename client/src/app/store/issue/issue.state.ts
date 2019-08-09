//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Issue, IssueElement } from 'src/app/models/issue';
import { IssueAction } from './issue.actions';

export interface IssueStateModel {
  /** List of issues */
  list: Issue[];

  /** Data for selected issue. */
  selected: Issue;

  /** Issue types. */
  types: IssueElement[];

  /** Issue priorities. */
  priorities: IssueElement[];

  /** Issue statuses. */
  statuses: IssueElement[];

  /** Issue resolutions. */
  resolutions: IssueElement[];
}

export const initIssueState: IssueStateModel = {
  list: [],
  selected: null,
  types: [],
  priorities: [],
  statuses: [],
  resolutions: [],
};

@State<IssueStateModel>({
  name: 'issue',
  defaults: initIssueState,
})
export class IssueState {

  @Selector()
  public static getState(state: IssueStateModel) {
    return state;
  }

  @Selector()
  public static getList(state: IssueStateModel): Issue[] {
    return state.list;
  }

  @Selector()
  public static getSelected(state: IssueStateModel): Issue {
    return state.selected;
  }

  @Selector()
  public static getTypes(state: IssueStateModel): IssueElement[] {
    return state.types;
  }

  @Selector()
  public static getPriorities(state: IssueStateModel): IssueElement[] {
    return state.priorities;
  }

  @Selector()
  public static getStatuses(state: IssueStateModel): IssueElement[] {
    return state.statuses;
  }

  @Selector()
  public static getResolutions(state: IssueStateModel): IssueElement[] {
    return state.resolutions;
  }

  @Action(IssueAction)
  public add(ctx: StateContext<IssueStateModel>, { payload }: IssueAction) {
  }
}
