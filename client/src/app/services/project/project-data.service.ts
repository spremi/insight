//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import {
  IssuesByComponent, IssuesByUser, IssuesByVersion, Project, ProjectVersion
} from 'src/app/models/project';
import { ProjectComponent } from 'src/app/models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  /**
   * Dummy project list.
   */
  readonly projects: Project[] = [
    {
      id: '001',
      key: 'P001',
      name: 'Project 001',
      desc: 'Project 001 description',
      iconId: 'ico_p001',
      category: {
        id: 'cat001',
        name: 'Category 001',
        desc: 'Project category 001',
      },
    },
    {
      id: '002',
      key: 'P002',
      name: 'Project 002',
      desc: 'Project 002 description',
      iconId: 'ico_p002',
      category: {
        id: 'cat001',
        name: 'Category 001',
        desc: 'Project category 001',
      },
    },
    {
      id: '003',
      key: 'P003',
      name: 'Project 003',
      desc: 'Project 003 description',
      iconId: 'ico_p003',
      category: {
        id: 'cat002',
        name: 'Category 002',
        desc: 'Project category 002',
      },
    },
  ];

  /**
   * Dummy list of project components.
   */
  readonly components: ProjectComponent[] = [
    {
      id: 'comp01',
      name: 'Component 1',
    },
    {
      id: 'comp02',
      name: 'Component 2',
    },
    {
      id: 'comp03',
      name: 'Component 3',
    },
    {
      id: 'comp04',
      name: 'Component 4',
    },
    {
      id: 'comp05',
      name: 'Component 5',
    },
  ];

  /**
   * Dummy list of project versions.
   */
  readonly versions: ProjectVersion[] = [
    {
      id: 'vers01',
      name: 'Vers 1',
      desc: 'Version 1',
      released: true,
    },
    {
      id: 'vers01',
      name: 'Vers 1',
      desc: 'Version 1',
      released: true,
    },
    {
      id: 'vers02',
      name: 'Vers 2',
      desc: 'Version 2',
      released: true,
    },
    {
      id: 'vers03',
      name: 'Vers 3',
      desc: 'Version 3',
      released: true,
    },
    {
      id: 'vers04',
      name: 'Vers 4',
      desc: 'Version 4',
      released: false,
    },
  ];

  /**
   * Dummy list of issues (by version).
   */
  versionIssues: IssuesByVersion[] = [
    {
      version: {
        id: 'ver001',
        name: 'Version 1',
      },
      data: {
        count: 100,
        affecting: 25,
        fixed: 25,
        unresolved: 50,
      },
    },
    {
      version: {
        id: 'ver002',
        name: 'Version 2',
      },
      data: {
        count: 105,
        affecting: 25,
        fixed: 25,
        unresolved: 55,
      },
    },
    {
      version: {
        id: 'ver003',
        name: 'Version 3',
      },
      data: {
        count: 110,
        affecting: 30,
        fixed: 25,
        unresolved: 55,
      },
    },
    {
      version: {
        id: 'ver004',
        name: 'Version 4',
      },
      data: {
        count: 115,
        affecting: 30,
        fixed: 30,
        unresolved: 55,
      },
    },
  ];

  /**
   * Dummy list of issues (by component).
   */
  compIssues: IssuesByComponent[] = [
    {
      component: {
        id: 'comp01',
        name: 'Component 1',
      },
      data: {
        count: 10,
      },
    },
    {
      component: {
        id: 'comp02',
        name: 'Component 2',
      },
      data: {
        count: 12,
      },
    },
    {
      component: {
        id: 'comp03',
        name: 'Component 3',
      },
      data: {
        count: 14,
      },
    },
    {
      component: {
        id: 'comp04',
        name: 'Component 4',
      },
      data: {
        count: 16,
      },
    },
    {
      component: {
        id: 'comp05',
        name: 'Component 5',
      },
      data: {
        count: 18,
      },
    },
  ];


  /**
   * Dummy list of issues (by user)
   */
  userIssues: IssuesByUser[] = [
    {
      user: {
        id: 'user01',
        name: 'User 1',
      },
      priority: [
        {
          name: 'P0',
          value: 5,
        },
        {
          name: 'P1',
          value: 6,
        },
        {
          name: 'P2',
          value: 7,
        },
      ],
      status: [
        {
          name: 'Status 0',
          value: 3,
        },
        {
          name: 'Status 2',
          value: 6,
        },
        {
          name: 'Status 2',
          value: 9,
        },
      ],
    },
  ];

  constructor() { }

  /**
   * Fetch data for specific project.
   */
  getProject(id: string): Observable<Project> {
    return of(this.projects[0]);
  }

  /**
   * Fetch data for all accessible projects.
   */
  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  /**
   * Fetch list of components in the project.
   */
  getComponents(id: string): Observable<ProjectComponent[]> {
    return of(this.components);
  }

  /**
   * Fetch list of versions in the project.
   */
  getVersions(id: string): Observable<ProjectVersion[]> {
    return of(this.versions);
  }

  /**
   * Fetch list of issues (by version) in the project.
   */
  getIssuesByVersion(projectId: string): Observable<IssuesByVersion[]> {
    return of(this.versionIssues);
  }

  /**
   * Fetch list of issues (by component) in the project.
   */
  getIssuesByComponent(projectId: string): Observable<IssuesByComponent[]> {
    return of(this.compIssues);
  }

  /**
   * Fetch list of issues (by user) in the project.
   */
  getIssuesByUser(projectId: string): Observable<IssuesByUser[]> {
    return of(this.userIssues);
  }
}
