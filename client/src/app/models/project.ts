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
 * Describes a project version.
 */
export interface ProjectVersion {
  /** Version identifier. */
  id: string;

  /** Version name. */
  name: string;

  /** Version description. */
  desc: string;

  /** Was version released? */
  released: boolean;
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

  /** Project category. */
  category: ProjectCategory;
}

/**
 * Describes generic summary element e.g. status, priority, ...
 */
export interface SummaryData {
  /** Name of attribute. */
  name: string;

  /** Value of attribute. */
  value: number;
}

/**
 * Describes summary of issues - by version - in a project.
 */
export interface IssuesByVersion {
  version: {
    id: string;
    name: string;
  };
  data: {
    /** Total number of issues. */
    count: number;

    /** Number of issues that affect the version. */
    affecting: number;

    /** Number of issues fixed in version. */
    fixed: number;

    /** Number of issues unresolved. */
    unresolved: number;
  };
}

/**
 * Describes summary of issues - by component - in a project.
 */
export interface IssuesByComponent {
  component: {
    id: string;
    name: string;
  };
  data: {
    /** Number of issues. */
    count: number;
  };
}

/**
 * Describes summary of issues - by user - in a project.
 */
export interface IssuesByUser {
  user: {
    id: string;
    name: string;
  };

  /** Array of issues - by priority. */
  priority: SummaryData[];

  /** Array of issues - by status. */
  status: SummaryData[];
}
