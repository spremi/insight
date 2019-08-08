//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export class UserAction {
  public static readonly type = '[User] Add item';
  constructor(public payload: string) { }
}
