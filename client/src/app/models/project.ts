//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Describes a component in a project.
 */
export interface ProjectComponent {
  /** Component identifier. */
  id: string;

  /** Component name. */
  name: string;
}

/**
 * Describes a project category.
 */
export interface ProjectCategory {
  /** Category identifier. */
  id: string;

  /** Category name. */
  name: string;

  /** Category description. */
  desc: string;
}

/**
 * Describes a project.
 */
export interface Project {
  /** Project identifier. */
  id: string;

  /** Project key (may be different from identifier). */
  key: string;

  /** Project name. */
  name: string;

  /** Project description. */
  desc: string;

  /** Project icon identifier. */
  iconId: string;

  /** Project description. */
  category: ProjectCategory;

  /** List of components. */
  components: ProjectComponent[];
}
