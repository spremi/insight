import { FilterState } from './filter/filter.state';
import { IssueState } from './issue/issue.state';
import { ProjectState } from './project/project.state';
import { UiState } from './ui/ui.state';
import { UserState } from './user/user.state';

/**
 * Application state.
 */
export const AppState = [
  UiState,
  UserState,
  ProjectState,
  IssueState,
  FilterState,
];

//
// Re-export individual actions & selectors
//
export * from './ui/ui.state';
export * from './ui/ui.actions';
export * from './user/user.state';
export * from './user/user.actions';
export * from './project/project.state';
export * from './project/project.actions';
export * from './issue/issue.state';
export * from './issue/issue.actions';
export * from './filter/filter.state';
export * from './filter/filter.actions';
