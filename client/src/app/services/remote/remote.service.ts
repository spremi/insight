//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemoteService {
  private readonly LOGIN = '/login';
  private readonly LOGOUT = '/logout';

  private readonly USERS = '/users';
  private readonly PROJECTS = '/projects';
  private readonly ISSUES = '/issues';

  constructor() { }

  /**
   * Returns login url
   */
  loginUrl(): string {
    return this.LOGIN;
  }

  /**
   * Returns logout url
   */
  logoutUrl(): string {
    return this.LOGOUT;
  }

  /**
   * Returns url for user resources.
   */
  userUrl(id?: string, res?: string): string {
    if (id && res) {
      return this.USERS + '/' + id + '/' + res;
    }

    if (id) {
      return this.USERS + '/' + id;
    }

    return this.USERS;
  }

  /**
   * Returns url for project resources.
   */
  projectUrl(id?: string, res?: string): string {
    if (id && res) {
      return this.PROJECTS + '/' + id + '/' + res;
    }

    if (id) {
      return this.PROJECTS + '/' + id;
    }

    return this.PROJECTS;
  }

  /**
   * Returns url for issue resources.
   */
  issueUrl(id?: string, res?: string): string {
    if (id && res) {
      return this.ISSUES + '/' + id + '/' + res;
    }

    if (id) {
      return this.ISSUES + '/' + id;
    }

    return this.ISSUES;
  }
}
