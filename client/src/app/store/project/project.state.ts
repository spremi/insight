//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Project, ProjectComponent, ProjectVersion } from 'src/app/models/project';
import { ProjectAction } from './project.actions';

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

  @Action(ProjectAction)
  public add(ctx: StateContext<ProjectStateModel>, { payload }: ProjectAction) {
  }
}
