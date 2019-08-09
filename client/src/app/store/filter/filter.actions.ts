//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export enum FilterName {
  Components = 1,
  Users,
  Statuses,
  Priorities,
  Resolutions,
  FixVersions,
  AffectedVersions,
}

export class FilterDummy {
  public static readonly type = '[Filter] Dummy';
}

export class FilterAdd {
  public static readonly type = '[Filter] Add item';

  constructor(public payload: { filter: FilterName, id: string }) { }
}

export class FilterRemove {
  public static readonly type = '[Filter] Remove item';

  constructor(public payload: { filter: FilterName, id: string }) { }
}

export class FilterClear {
  public static readonly type = '[Filter] Clear all';

  constructor(public payload: { filter: FilterName }) { }
}
