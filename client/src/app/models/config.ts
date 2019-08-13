//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Describes server configuration.
 */
export interface ServerConfig {
  /** URL. */
  url: string;
}

/**
 * Describes static application configuration.
 */
export interface ConfigData {
  /** Server Configuration. */
  server: ServerConfig;
}
