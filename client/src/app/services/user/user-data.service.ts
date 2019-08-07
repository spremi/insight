//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  /**
   * Dummy list of users.
   */
  readonly users: User[] = [
    {
      id: 'user01',
      name: 'User 1',
      avatarId: 'av001',
      active: true,
    },
    {
      id: 'user02',
      name: 'User 2',
      avatarId: 'av002',
      active: true,
    },
    {
      id: 'user03',
      name: 'User 3',
      avatarId: 'av003',
      active: true,
    },
    {
      id: 'user04',
      name: 'User 4',
      avatarId: 'av004',
      active: true,
    },
    {
      id: 'user05',
      name: 'User 5',
      avatarId: 'av005',
      active: true,
    },
  ];

  constructor() { }

  getUser(id: string): Observable<User> {
    return of(this.users[0]);
  }

  getUsers(projId: string): Observable<User[]> {
    return of(this.users);
  }
}
