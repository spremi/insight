//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserLogout, UserState } from 'src/app/store';

@Component({
  selector: 'sp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  /**
   * Is user authenticated?
   */
  @Select(UserState.isAuthenticated) isAuth$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new UserLogout());
  }
}
