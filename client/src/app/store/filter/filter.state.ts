//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FilterName, FilterReset, FilterSet } from './filter.actions';

export interface FilterStateModel {
  components: string[];
  users: string[];
  types: string[];
  statuses: string[];
  priorities: string[];
  resolutions: string[];
  fixVersions: string[];
  affectedVersions: string[];
}

export const initFilterState: FilterStateModel = {
  components: [],
  users: [],
  types: [],
  statuses: [],
  priorities: [],
  resolutions: [],
  fixVersions: [],
  affectedVersions: [],
};

@State<FilterStateModel>({
  name: 'filter',
  defaults: initFilterState,
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
  public static getTypes(state: FilterStateModel): string[] {
    return state.types;
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

  @Action(FilterReset)
  public reset(ctx: StateContext<FilterStateModel>) {
    ctx.setState(initFilterState);
  }

  @Action(FilterSet)
  public add(ctx: StateContext<FilterStateModel>, { payload }: FilterSet) {
    switch (payload.filter) {
      case FilterName.Components:
        ctx.patchState({ components: [...payload.items] });
        break;

      case FilterName.Users:
        ctx.patchState({ users: [...payload.items] });
        break;

      case FilterName.Types:
        ctx.patchState({ types: [...payload.items] });
        break;

      case FilterName.Statuses:
        ctx.patchState({ statuses: [...payload.items] });
        break;

      case FilterName.Priorities:
        ctx.patchState({ priorities: [...payload.items] });
        break;

      case FilterName.Resolutions:
        ctx.patchState({ resolutions: [...payload.items] });
        break;

      case FilterName.FixVersions:
        ctx.patchState({ fixVersions: [...payload.items] });
        break;

      case FilterName.AffectedVersions:
        ctx.patchState({ affectedVersions: [...payload.items] });
        break;

      default:
    }
  }
}
