//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

export class UserReset {
  public static readonly type = '[User] Reset';
}

export class UserLogin {
  public static readonly type = '[User] Login';

  constructor(public payload: { id: string, pass: string }) { }
}

export class UserLoginFailed {
  public static readonly type = '[User] Login failed';
}

export class UserLogout {
  public static readonly type = '[User] Logout';
}

export class UserFetchData {
  public static readonly type = '[User] Fetch data';

  constructor(public payload: { id: string }) { }
}

export class UserFetchDataFailed {
  public static readonly type = '[User] Fetch data failed';
}
