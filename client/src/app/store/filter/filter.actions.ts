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
  Types,
  Statuses,
  Priorities,
  Resolutions,
  FixVersions,
  AffectedVersions,
}

export class FilterReset {
  public static readonly type = '[Filter] Reset';
}

export class FilterSet {
  public static readonly type = '[Filter] Add set';

  constructor(public payload: { filter: FilterName, items: string[] }) { }
}
