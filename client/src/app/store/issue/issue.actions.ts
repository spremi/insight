//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export class IssueReset {
  public static readonly type = '[Issue] Reset';
}

export class IssueFetchList {
  public static readonly type = '[Issue] Fetch list';
}

export class IssueFetchListFailed {
  public static readonly type = '[Issue] Fetch list failed';
}

export class IssueFetchData {
  public static readonly type = '[Issue] Fetch data';

  constructor(public payload: { issueId: string }) { }
}

export class IssueFetchDataFailed {
  public static readonly type = '[Issue] Fetch data failed';
}

export class IssueSetAssignee {
  public static readonly type = '[Issue] Set assignee';

  constructor(public payload: { issueId: string, userId: string }) { }
}

export class IssueSetAssigneeFailed {
  public static readonly type = '[Issue] Set assignee failed';
}

export class IssueSetStatus {
  public static readonly type = '[Issue] Set status';

  constructor(public payload: { issueId: string, statusId: string }) { }
}

export class IssueSetStatusFailed {
  public static readonly type = '[Issue] Set status failed';
}

export class IssueSetPriority {
  public static readonly type = '[Issue] Set priority';

  constructor(public payload: { issueId: string, priorityId: string }) { }
}

export class IssueSetPriorityFailed {
  public static readonly type = '[Issue] Set priority failed';
}

export class IssueSetResolution {
  public static readonly type = '[Issue] Set resolution';

  constructor(public payload: { issueId: string, resolutionId: string }) { }
}

export class IssueSetResolutionFailed {
  public static readonly type = '[Issue] Set resolution failed';
}

export class IssueSetFixVersions {
  public static readonly type = '[Issue] Set fix versions';

  constructor(public payload: { issueId: string, versions: string[] }) { }
}

export class IssueSetFixVersionsFailed {
  public static readonly type = '[Issue] Set fix versions failed';
}

export class IssueSetAffectedVersions {
  public static readonly type = '[Issue] Set affected versions';

  constructor(public payload: { issueId: string, versions: string[] }) { }
}

export class IssueSetAffectedVersionsFailed {
  public static readonly type = '[Issue] Set affected versions failed';
}
