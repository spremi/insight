//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export class IssueAction {
  public static readonly type = '[Issue] Add item';
  constructor(public payload: string) { }
}
