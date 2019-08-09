//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Project, ProjectComponent, ProjectVersion } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { ProjectAction } from './project.actions';

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
}

export const initProjectState: ProjectStateModel = {
  list: [],
  selected: null,
  components: [],
  versions: [],
  users: [],
};
@State<ProjectStateModel>({
  name: 'project',
  defaults: initProjectState,
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

  @Action(ProjectAction)
  public add(ctx: StateContext<ProjectStateModel>, { payload }: ProjectAction) {
  }
}
