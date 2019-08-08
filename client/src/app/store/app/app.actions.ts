//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export class AppAction {
  public static readonly type = '[App] Add item';
  constructor(public payload: string) { }
}
