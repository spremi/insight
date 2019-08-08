//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export class FilterAction {
  public static readonly type = '[Filter] Add item';
  constructor(public payload: string) { }
}
