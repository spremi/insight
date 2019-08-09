//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export class ProjectDummy {
  public static readonly type = '[Project] Dummy';
}

export class ProjectFetchList {
  public static readonly type = '[Project] Fetch list';
}

export class ProjectFetchListFailed {
  public static readonly type = '[Project] Fetch list failed';
}

export class ProjectFetchInfo {
  public static readonly type = '[Project] Fetch info';

  constructor(public payload: { projectId: string }) { }
}

export class ProjectFetchInfoFailed {
  public static readonly type = '[Project] Fetch info failed';
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
