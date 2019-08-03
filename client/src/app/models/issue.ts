//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Describes attributes of common data elements in an issue.
 * E.g. type, priority, status, resolution.
 */
export interface IssueElement {
  /** Identifier. */
  id: string;

  /** Name. */
  name: string;

  /** Description. */
  desc: string;

  /** Icon identifier. */
  iconId: string;
}

export interface Issue {
  /** Issue identifier. */
  id: string;

  /** Issue key. */
  key: string;

  /** Issue summayr/ title. */
  summary: string;

  /** Issue description. */
  desc: string;

  /** Issue type identifier. */
  typeId: string;

  /** Issue priority identifier. */
  priorityId: string;

  /** Issue status identifier. */
  statusId: string;

  /** Issue resolution identifier. */
  resolutionId: string;
}
