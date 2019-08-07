//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Project, ProjectVersion } from 'src/app/models/project';
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
  getComponents(): Observable<ProjectComponent[]> {
    return of(this.components);
  }

  /**
   * Fetch list of versions in the project.
   */
  getVersions(): Observable<ProjectVersion[]> {
    return of(this.versions);
  }
}
