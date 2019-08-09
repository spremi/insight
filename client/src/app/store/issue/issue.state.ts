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
  IssueDummy, IssueFetchInfo, IssueFetchInfoFailed, IssueSetAffectedVersions,
  IssueSetAffectedVersionsFailed, IssueSetAssignee, IssueSetAssigneeFailed,
  IssueSetFixVersions, IssueSetFixVersionsFailed, IssueSetPriority,
  IssueSetPriorityFailed, IssueSetResolution, IssueSetResolutionFailed,
  IssueSetStatus, IssueSetStatusFailed
} from './issue.actions';

export interface IssueStateModel {
  /** List of issues */
  list: Issue[];

  /** Issue types. */
  types: IssueElement[];

  /** Issue priorities. */
  priorities: IssueElement[];

  /** Issue statuses. */
  statuses: IssueElement[];

  /** Issue resolutions. */
  resolutions: IssueElement[];
}

@State<IssueStateModel>({
  name: 'issue',
  defaults: {
    list: [],
    types: [],
    priorities: [],
    statuses: [],
    resolutions: [],
  },
})
export class IssueState {

  @Selector()
  public static getState(state: IssueStateModel) {
    return state;
  }

  @Selector()
  public static getIssues(state: IssueStateModel): Issue[] {
    return state.list;
  }

  @Selector()
  public static getIssue(state: IssueStateModel): Issue {
    return state.list[0]; // TODO
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

  @Action(IssueDummy)
  public dummy(ctx: StateContext<IssueStateModel>) {
  }

  @Action(IssueFetchInfo)
  public fetchInfo(
    ctx: StateContext<IssueStateModel>,
    { payload }: IssueFetchInfo) {
  }

  @Action(IssueFetchInfoFailed)
  public fetchInfoFailed(ctx: StateContext<IssueStateModel>) {
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
