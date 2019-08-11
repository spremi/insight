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
    ctx.patchState({ waiting: payload.flag });
  }

  @Action(UiSetProject)
  public setProject(
    ctx: StateContext<UiStateModel>,
    { payload }: UiSetProject) {
    ctx.patchState({ project: payload.id });
  }

  @Action(UiSetIssue)
  public setIssue(
    ctx: StateContext<UiStateModel>,
    { payload }: UiSetIssue) {
    ctx.patchState({ issue: payload.id });
  }

  @Action(UiSetAffectedVersions)
  public setAffectedVersions(
    ctx: StateContext<UiStateModel>,
    { payload }: UiSetAffectedVersions) {
    ctx.patchState({ affectedVersions: payload.versions });
  }

  @Action(UiSetFixVersions)
  public setFixVersions(
    ctx: StateContext<UiStateModel>,
    { payload }: UiSetFixVersions) {
    ctx.patchState({ fixVersions: payload.versions });
  }

  @Action(UiFetchFavorites)
  public fetchFavorites(ctx: StateContext<UiStateModel>) {
    const favs = localStorage.getItem('fav-projects');

    if (favs) {
      const list = favs.split(',');
      ctx.patchState({ favProjects: list });
    } else {
      ctx.patchState({ favProjects: [] });
    }
  }

  @Action(UiSetFavorites)
  public setFavorites(
    ctx: StateContext<UiStateModel>,
    { payload }: UiSetFavorites) {
    //
    // Leverage 'set' to prevent duplicate entries when existing projects
    // are added.
    //
    const favSet = new Set(ctx.getState().favProjects);

    payload.projects.forEach((proj) => {
      favSet.add(proj);
    });

    const newFavs = Array.from(favSet);

    localStorage.setItem('fav-projects', newFavs.join(','));

    ctx.patchState({ favProjects: newFavs });
  }

  @Action(UiRemoveFavorite)
  public removeFavorites(
    ctx: StateContext<UiStateModel>,
    { payload }: UiRemoveFavorite) {
    const favList = ctx.getState().favProjects;

    const newFavs = favList.filter((arg) => arg !== payload.projectId);

    localStorage.setItem('fav-projects', newFavs.join(','));

    ctx.patchState({ favProjects: newFavs });
  }
}
