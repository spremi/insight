//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Describes an icon.
 */
export interface IconInfo {
  /** Name of the icon - used in code. */
  readonly icon: string;

  /** Corresponding file name. */
  readonly file: string;
}

/**
 * Describes a set of icons at specific path.
 */
export interface IconSet {
  /** Path to base of icon set. */
  readonly path: string;

  /** Array of icons. */
  readonly list: IconInfo[];
}
