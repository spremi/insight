//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export class UiDummy {
  public static readonly type = '[Ui] Dummy';
}

export class UiSetWaiting {
  public static readonly type = '[Ui] Set waiting';

  constructor(public payload: { flag: boolean }) { }
}

export class UiSetProject {
  public static readonly type = '[Ui] Set project';

  constructor(public payload: { id: string }) { }
}

export class UiSetIssue {
  public static readonly type = '[Ui] Set issue';

  constructor(public payload: { id: string }) { }
}

export class UiSetAffectedVersions {
  public static readonly type = '[Ui] Set affected versions';

  constructor(public payload: { versions: string[] }) { }
}

export class UiSetFixVersions {
  public static readonly type = '[Ui] Set fix versions';

  constructor(public payload: { versions: string[] }) { }
}

export class UiFetchFavorites {
  public static readonly type = '[Ui] fetch favorites';
}

export class UiSetFavorites {
  public static readonly type = '[Ui] Set favorites';

  constructor(public payload: { projects: string[] }) { }
}

export class UiRemoveFavorite {
  public static readonly type = '[Ui] Remove favorite';

  constructor(public payload: { projectId: string }) { }
}
