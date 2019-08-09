//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FilterAdd, FilterClear, FilterDummy, FilterRemove } from './filter.actions';

export interface FilterStateModel {
  components: string[];
  users: string[];
  statuses: string[];
  priorities: string[];
  resolutions: string[];
  fixVersions: string[];
  affectedVersions: string[];
}

@State<FilterStateModel>({
  name: 'filter',
  defaults: {
    components: [],
    users: [],
    statuses: [],
    priorities: [],
    resolutions: [],
    fixVersions: [],
    affectedVersions: [],
  },
})
export class FilterState {

  @Selector()
  public static getState(state: FilterStateModel) {
    return state;
  }

  @Selector()
  public static getComponents(state: FilterStateModel): string[] {
    return state.components;
  }

  @Selector()
  public static getUsers(state: FilterStateModel): string[] {
    return state.users;
  }

  @Selector()
  public static getStatuses(state: FilterStateModel): string[] {
    return state.statuses;
  }

  @Selector()
  public static getPriorities(state: FilterStateModel): string[] {
    return state.priorities;
  }

  @Selector()
  public static getResolutions(state: FilterStateModel): string[] {
    return state.resolutions;
  }

  @Selector()
  public static getFixVersions(state: FilterStateModel): string[] {
    return state.fixVersions;
  }

  @Selector()
  public static getAffectedVersions(state: FilterStateModel): string[] {
    return state.affectedVersions;
  }

  @Action(FilterDummy)
  public dummy(ctx: StateContext<FilterStateModel>) {
  }

  @Action(FilterAdd)
  public add(ctx: StateContext<FilterStateModel>, { payload }: FilterAdd) {

  }

  @Action(FilterRemove)
  public remove(ctx: StateContext<FilterStateModel>, { payload }: FilterRemove) {
  }

  @Action(FilterClear)
  public clear(ctx: StateContext<FilterStateModel>, { payload }: FilterClear) {
  }
}
