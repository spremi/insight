//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export class ProjectAction {
  public static readonly type = '[Project] Add item';
  constructor(public payload: string) { }
}
