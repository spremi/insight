//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export class ProjectReset {
  public static readonly type = '[Project] Reset';
}

export class ProjectFetchList {
  public static readonly type = '[Project] Fetch list';
}

export class ProjectFetchListFailed {
  public static readonly type = '[Project] Fetch list failed';
}

export class ProjectFetchData {
  public static readonly type = '[Project] Fetch data';

  constructor(public payload: { projectId: string }) { }
}

export class ProjectFetchDataFailed {
  public static readonly type = '[Project] Fetch data failed';
}

export class ProjectFetchComponents {
  public static readonly type = '[Project] Fetch components';

  constructor(public payload: { projectId: string }) { }
}

export class ProjectFetchComponentsFailed {
  public static readonly type = '[Project] Fetch components failed';
}

export class ProjectFetchVersions {
  public static readonly type = '[Project] Fetch versions';

  constructor(public payload: { projectId: string }) { }
}

export class ProjectFetchVersionsFailed {
  public static readonly type = '[Project] Fetch versions failed';
}

export class ProjectFetchUsers {
  public static readonly type = '[Project] Fetch users';

  constructor(public payload: { projectId: string }) { }
}

export class ProjectFetchUsersFailed {
  public static readonly type = '[Project] Fetch users failed';
}

export class ProjectFetchIssuesByVersion {
  public static readonly type = '[Project] Fetch issues by version';

  constructor(public payload: { projectId: string }) { }
}

export class ProjectFetchIssuesByVersFailed {
  public static readonly type = '[Project] Fetch issues by version failed';
}

export class ProjectFetchIssuesByComponent {
  public static readonly type = '[Project] Fetch issues by component';

  constructor(public payload: { projectId: string }) { }
}

export class ProjectFetchIssuesByComponentFailed {
  public static readonly type = '[Project] Fetch issues by component failed';
}

export class ProjectFetchIssuesByUser {
  public static readonly type = '[Project] Fetch issues by user';

  constructor(public payload: { projectId: string }) { }
}

export class ProjectFetchIssuesByUserFailed {
  public static readonly type = '[Project] Fetch issues by user failed';
}
