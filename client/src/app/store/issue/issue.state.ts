//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Issue, IssueElement } from 'src/app/models/issue';
import {
  IssueFetchData, IssueFetchDataFailed, IssueFetchList, IssueFetchListFailed,
  IssueReset, IssueSetAffectedVersions, IssueSetAffectedVersionsFailed,
  IssueSetAssignee, IssueSetAssigneeFailed, IssueSetFixVersions,
  IssueSetFixVersionsFailed, IssueSetPriority, IssueSetPriorityFailed,
  IssueSetResolution, IssueSetResolutionFailed, IssueSetStatus, IssueSetStatusFailed
} from './issue.actions';

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

  @Action(IssueReset)
  public reset(ctx: StateContext<IssueStateModel>) {
    ctx.setState(initIssueState);
  }

  @Action(IssueFetchList)
  public fetchList(ctx: StateContext<IssueStateModel>) {
  }

  @Action(IssueFetchListFailed)
  public fetchListFailed(ctx: StateContext<IssueStateModel>) {
  }

  @Action(IssueFetchData)
  public fetchData(
    ctx: StateContext<IssueStateModel>,
    { payload }: IssueFetchData) {
  }

  @Action(IssueFetchDataFailed)
  public fetchDataFailed(ctx: StateContext<IssueStateModel>) {
  }

  @Action(IssueSetAssignee)
  public setAssignee(
    ctx: StateContext<IssueStateModel>,
    { payload }: IssueSetAssignee) {
  }

  @Action(IssueSetAssigneeFailed)
  public setAssigneeFailed(ctx: StateContext<IssueStateModel>) {
  }

  @Action(IssueSetStatus)
  public setStatus(
    ctx: StateContext<IssueStateModel>,
    { payload }: IssueSetStatus) {
  }

  @Action(IssueSetStatusFailed)
  public setStatusFailed(ctx: StateContext<IssueStateModel>) {
  }

  @Action(IssueSetPriority)
  public setPriority(
    ctx: StateContext<IssueStateModel>,
    { payload }: IssueSetPriority) {
  }

  @Action(IssueSetPriorityFailed)
  public setPriorityFailed(ctx: StateContext<IssueStateModel>) {
  }

  @Action(IssueSetResolution)
  public setResolution(
    ctx: StateContext<IssueStateModel>,
    { payload }: IssueSetResolution) {
  }

  @Action(IssueSetResolutionFailed)
  public setResolutionFailed(ctx: StateContext<IssueStateModel>) {
  }

  @Action(IssueSetFixVersions)
  public setFixVersions(
    ctx: StateContext<IssueStateModel>,
    { payload }: IssueSetFixVersions) {
  }

  @Action(IssueSetFixVersionsFailed)
  public setFixVersionsFailed(ctx: StateContext<IssueStateModel>) {
  }

  @Action(IssueSetAffectedVersions)
  public setAffectedVersions(
    ctx: StateContext<IssueStateModel>,
    { payload }: IssueSetAffectedVersions) {
  }

  @Action(IssueSetAffectedVersionsFailed)
  public setAffectedVersionsFailed(ctx: StateContext<IssueStateModel>) {
  }
}
