//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ProjectAction } from './project.actions';
import { initProjectState, ProjectState, ProjectStateModel } from './project.state';

describe('Project store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ProjectState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: ProjectStateModel = initProjectState;

    store.dispatch(new ProjectAction('item-1'));
    const actual = store.selectSnapshot(ProjectState.getState);
    expect(actual).toEqual(expected);
  });

});
