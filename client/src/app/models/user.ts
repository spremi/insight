//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Describes a user.
 */
export interface User {
  /** User identifier. */
  id: string;

  /** User name. */
  name: string;

  /** User's avatar identifier. */
  avatarId: string;

  /** Is user active? */
  active: boolean;
}
