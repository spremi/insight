//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Describes session information.
 */
export interface AuthSession {
  /** Session name. */
  name: string;

  /** Session value. */
  value: string;
}

/**
 * Describes authentication response from server.
 */
export interface AuthResult {
  token?: string;
  session?: AuthSession;
}
