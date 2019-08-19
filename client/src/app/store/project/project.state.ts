//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import {
  IssuesByComponent, IssuesByUser, IssuesByVersion,
  Project, ProjectComponent, ProjectVersion
} from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { ProjectDataService } from 'src/app/services/project/project-data.service';
import { UserDataService } from 'src/app/services/user/user-data.service';
import {
  ProjectFetchComponents, ProjectFetchComponentsFailed, ProjectFetchData,
  ProjectFetchDataFailed, ProjectFetchIssuesByComponent,
  ProjectFetchIssuesByComponentFailed, ProjectFetchIssuesByUser,
  ProjectFetchIssuesByUserFailed, ProjectFetchIssuesByVersion,
  ProjectFetchIssuesByVersFailed, ProjectFetchList,
  ProjectFetchListFailed, ProjectFetchUsers,
  ProjectFetchUsersFailed, ProjectFetchVersions,
  ProjectFetchVersionsFailed, ProjectReset
} from './project.actions';

export interface ProjectStateModel {
  /** List of projects accessible to user. */
  list: Project[];

  /** Data for selected project. */
  selected: Project;

  /** Components in the project. */
  components: ProjectComponent[];

  /** Versions in the project. */
  versions: ProjectVersion[];

  /** Users associated with the project. */
  users: User[];

  /** Issues (by version) in the project. */
  versionIssues: IssuesByVersion[];

  /** Issues (by component) in the project. */
  compIssues: IssuesByComponent[];

  /** Issues (by user) in the project. */
  userIssues: IssuesByUser[];
}

export const initProjectState: ProjectStateModel = {
  list: [],
  selected: null,
  components: [],
  versions: [],
  users: [],
  versionIssues: [],
  compIssues: [],
  userIssues: [],
};
@State<ProjectStateModel>({
  name: 'project',
  defaults: initProjectState,
})
export class ProjectState {

  constructor(
    private projDataSvc: ProjectDataService,
    private userDataSvc: UserDataService
  ) { }

  @Selector()
  public static getState(state: ProjectStateModel) {
    return state;
  }

  @Selector()
  public static getList(state: ProjectStateModel): Project[] {
    return state.list;
  }

  @Selector()
  public static getSelected(state: ProjectStateModel): Project {
    return state.selected;
  }

  @Selector()
  public static getComponents(state: ProjectStateModel): ProjectComponent[] {
    return state.components;
  }

  @Selector()
  public static getVersions(state: ProjectStateModel): ProjectVersion[] {
    return state.versions;
  }

  @Selector()
  public static getUsers(state: ProjectStateModel): User[] {
    return state.users;
  }

  @Selector()
  public static getIssuesByVersion(state: ProjectStateModel): IssuesByVersion[] {
    return state.versionIssues;
  }

  @Selector()
  public static getIssuesByComponent(state: ProjectStateModel): IssuesByComponent[] {
    return state.compIssues;
  }

  @Selector()
  public static getIssuesByUser(state: ProjectStateModel): IssuesByUser[] {
    return state.userIssues;
  }

  @Action(ProjectReset)
  public reset(ctx: StateContext<ProjectStateModel>) {
    ctx.setState(initProjectState);
  }

  @Action(ProjectFetchList)
  public fetchList(ctx: StateContext<ProjectStateModel>) {
    return this.projDataSvc.getProjects().pipe(
      tap((data) => {
        ctx.patchState({ list: data });
      }));
  }

  @Action(ProjectFetchListFailed)
  public fetchListFailed(ctx: StateContext<ProjectStateModel>) {
  }

  @Action(ProjectFetchData)
  public fetchData(
    ctx: StateContext<ProjectStateModel>,
    { payload }: ProjectFetchData) {
    return this.projDataSvc.getProject(payload.projectId).pipe(
      tap((data: Project) => {
        ctx.patchState({ selected: { ...data } });
      }));
  }

  @Action(ProjectFetchDataFailed)
  public fetchDataFailed(ctx: StateContext<ProjectStateModel>) {
  }

  @Action(ProjectFetchComponents)
  public fetchComponents(
    ctx: StateContext<ProjectStateModel>,
    { payload }: ProjectFetchComponents) {
    return this.projDataSvc.getComponents(payload.projectId).pipe(
      tap((data: ProjectComponent[]) => {
        ctx.patchState({ components: [...data] });
      }));
  }

  @Action(ProjectFetchComponentsFailed)
  public fetchComponentsFailed(ctx: StateContext<ProjectStateModel>) {
  }

  @Action(ProjectFetchVersions)
  public fetchVersions(
    ctx: StateContext<ProjectStateModel>,
    { payload }: ProjectFetchVersions) {
    return this.projDataSvc.getVersions(payload.projectId).pipe(
      tap((data: ProjectVersion[]) => {
        ctx.patchState({ versions: [...data] });
      }));
  }

  @Action(ProjectFetchVersionsFailed)
  public fetchVersionsFailed(ctx: StateContext<ProjectStateModel>) {
  }

  @Action(ProjectFetchUsers)
  public fetchUsers(
    ctx: StateContext<ProjectStateModel>,
    { payload }: ProjectFetchUsers) {
    return this.userDataSvc.getUsers(payload.projectId).pipe(
      tap((data: User[]) => {
        ctx.patchState({ users: [...data] });
      }));
  }

  @Action(ProjectFetchUsersFailed)
  public fetchUsersFailed(ctx: StateContext<ProjectStateModel>) {
  }

  @Action(ProjectFetchIssuesByVersion)
  public fetchIssuesByVersion(
    ctx: StateContext<ProjectStateModel>,
    { payload }: ProjectFetchIssuesByVersion) {
    return this.projDataSvc.getIssuesByVersion(payload.projectId).pipe(
      tap((data: IssuesByVersion[]) => {
        ctx.patchState({ versionIssues: [...data] });
      }));
  }

  @Action(ProjectFetchIssuesByVersFailed)
  public fetchIssuesByVersFailed(ctx: StateContext<ProjectStateModel>) {
  }

  @Action(ProjectFetchIssuesByComponent)
  public fetchIssuesByComp(
    ctx: StateContext<ProjectStateModel>,
    { payload }: ProjectFetchIssuesByComponent) {
    return this.projDataSvc.getIssuesByComponent(payload.projectId).pipe(
      tap((data: IssuesByComponent[]) => {
        ctx.patchState({ compIssues: [...data] });
      }));
  }

  @Action(ProjectFetchIssuesByComponentFailed)
  public fetchIssuesByCompFailed(ctx: StateContext<ProjectStateModel>) {
  }

  @Action(ProjectFetchIssuesByUser)
  public fetchIssuesByUser(
    ctx: StateContext<ProjectStateModel>,
    { payload }: ProjectFetchIssuesByUser) {
    return this.projDataSvc.getIssuesByUser(payload.projectId).pipe(
      tap((data: IssuesByUser[]) => {
        ctx.patchState({ userIssues: [...data] });
      }));
  }

  @Action(ProjectFetchIssuesByUserFailed)
  public fetchIssuesByUserFailed(ctx: StateContext<ProjectStateModel>) {
  }
}
