//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  UiDummy, UiFetchFavorites, UiRemoveFavorite, UiSetAffectedVersions,
  UiSetFavorites, UiSetFixVersions, UiSetIssue, UiSetProject, UiSetWaiting
} from './ui.actions';

export interface UiStateModel {
  /** Waiting for action to complete */
  waiting: boolean;

  /** List of favorite issues. */
  favProjects: string[];

  /** Identifier of current project. */
  project: string;

  /** Identifier of current issue. */
  issue: string;

  /** Identifiers of selected affected versions. */
  affectedVersions: string[];

  /** Identifiers of selected fix versions. */
  fixVersions: string[];
}

@State<UiStateModel>({
  name: 'ui',
  defaults: {
    waiting: false,
    favProjects: [],
    project: null,
    issue: null,
    affectedVersions: [],
    fixVersions: [],
  },
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

  @Selector()
  public static getAffectedVersions(state: UiStateModel): string[] {
    return state.affectedVersions;
  }

  @Selector()
  public static getFixVersions(state: UiStateModel): string[] {
    return state.fixVersions;
  }

  @Action(UiDummy)
  public dummy(ctx: StateContext<UiStateModel>) {
  }

  @Action(UiSetWaiting)
  public setWaiting(
    ctx: StateContext<UiStateModel>,
    { payload }: UiSetWaiting) {
  }

  @Action(UiSetProject)
  public setProject(
    ctx: StateContext<UiStateModel>,
    { payload }: UiSetProject) {
  }

  @Action(UiSetIssue)
  public setIssue(
    ctx: StateContext<UiStateModel>,
    { payload }: UiSetIssue) {
  }

  @Action(UiSetAffectedVersions)
  public setAffectedVersions(
    ctx: StateContext<UiStateModel>,
    { payload }: UiSetAffectedVersions) {
  }

  @Action(UiSetFixVersions)
  public setFixVersions(
    ctx: StateContext<UiStateModel>,
    { payload }: UiSetFixVersions) {
  }

  @Action(UiFetchFavorites)
  public fetchFavorites(ctx: StateContext<UiStateModel>) {
  }

  @Action(UiSetFavorites)
  public setFavorites(
    ctx: StateContext<UiStateModel>,
    { payload }: UiSetFavorites) {
  }

  @Action(UiRemoveFavorite)
  public removeFavorites(
    ctx: StateContext<UiStateModel>,
    { payload }: UiRemoveFavorite) {
  }
}
