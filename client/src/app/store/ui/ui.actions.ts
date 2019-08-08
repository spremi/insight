//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export class UiAction {
  public static readonly type = '[Ui] Add item';
  constructor(public payload: string) { }
}
