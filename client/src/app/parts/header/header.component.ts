//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { ProjectState } from 'src/app/store/project/project.state';
import { UserLogout } from 'src/app/store/user/user.actions';
import { UserState } from 'src/app/store/user/user.state';

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

  @Select(UserState.getUser) user$: Observable<User>;
  @Select(ProjectState.getSelected) proj$: Observable<Project>;

  /**
   * Current URL.
   */
  currentUrl = '';

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.url;
    });
  }

  logout() {
    this.store.dispatch(new UserLogout());
  }
}
