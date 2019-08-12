//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Project, ProjectComponent, ProjectVersion } from 'src/app/models/project';
import { ProjectDataService } from 'src/app/services/project/project-data.service';
import {
  ProjectDummy, ProjectFetchComponents, ProjectFetchComponentsFailed,
  ProjectFetchInfo, ProjectFetchInfoFailed, ProjectFetchList,
  ProjectFetchListFailed, ProjectFetchVersions, ProjectFetchVersionsFailed
} from './project.actions';

export interface ProjectStateModel {
  /** List of projects accessible to user. */
  list: Project[];

  /** Generic selected project information. */
  info: Project;

  /** Components in the project. */
  components: ProjectComponent[];

  /** Versions in the project. */
  versions: ProjectVersion[];
}

@State<ProjectStateModel>({
  name: 'project',
  defaults: {
    list: [],
    info: null,
    components: [],
    versions: [],
  },
})
export class ProjectState {

  constructor(private projDataSvc: ProjectDataService) { }

  @Selector()
  public static getState(state: ProjectStateModel) {
    return state;
  }

  @Selector()
  public static getList(state: ProjectStateModel): Project[] {
    return state.list;
  }

  @Selector()
  public static getInfo(state: ProjectStateModel): Project {
    return state.info;
  }

  @Selector()
  public static getComponents(state: ProjectStateModel): ProjectComponent[] {
    return state.components;
  }

  @Selector()
  public static getVersions(state: ProjectStateModel): ProjectVersion[] {
    return state.versions;
  }

  @Action(ProjectDummy)
  public dummy(ctx: StateContext<ProjectStateModel>) {
  }

  @Action(ProjectFetchList)
  public fetchList(ctx: StateContext<ProjectStateModel>) {
    return this.projDataSvc.getProjects().pipe(tap((data) => {
      ctx.patchState({ list: data });
    }));
  }

  @Action(ProjectFetchListFailed)
  public fetchListFailed(ctx: StateContext<ProjectStateModel>) {
  }

  @Action(ProjectFetchInfo)
  public fetchInfo(
    ctx: StateContext<ProjectStateModel>,
    { payload }: ProjectFetchInfo) {
  }

  @Action(ProjectFetchInfoFailed)
  public fetchInfoFailed(ctx: StateContext<ProjectStateModel>) {
  }

  @Action(ProjectFetchComponents)
  public fetchComponents(
    ctx: StateContext<ProjectStateModel>,
    { payload }: ProjectFetchComponents) {
  }

  @Action(ProjectFetchComponentsFailed)
  public fetchComponentsFailed(ctx: StateContext<ProjectStateModel>) {
  }

  @Action(ProjectFetchVersions)
  public fetchVersions(
    ctx: StateContext<ProjectStateModel>,
    { payload }: ProjectFetchVersions) {
  }

  @Action(ProjectFetchVersionsFailed)
  public fetchVersionsFailed(ctx: StateContext<ProjectStateModel>) {
  }
}
