//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Describes data for an information element.
 */
export interface InfoData {
  /** Label. */
  label: string;

  /** Value. */
  value: string;

  /** Optional attributes. */
  attrs?: string[];
}

/**
 * Describes data input for a tile.
 */
export interface TileData {
  /** Label. */
  title: string;

  /** Data for each element in tile. */
  elements: InfoData[];
}

/**
 * Describes data input for a panel.
 */
export interface PanelData {
  /** Title. */
  title: string;

  /** Data for each tile in panel. */
  groups: TileData[];
}
