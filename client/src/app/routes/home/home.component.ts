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
import { Project } from 'src/app/models/project';
import { ProjectState, UiState, UserState } from 'src/app/store';

@Component({
  selector: 'sp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {

  @Select(UserState.isAuthenticated)
  auth$: Observable<boolean>;

  @Select(ProjectState.getList)
  projects$: Observable<Project[]>;

  @Select(UiState.getFavProjects)
  favProjects$: Observable<Project[]>;

  constructor(private store: Store) { }

  ngOnInit() {
  }
}
