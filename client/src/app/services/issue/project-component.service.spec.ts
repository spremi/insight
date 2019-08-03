import { TestBed } from '@angular/core/testing';

import { ProjectComponentService } from './project-component.service';

describe('ProjectComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectComponentService = TestBed.get(ProjectComponentService);
    expect(service).toBeTruthy();
  });
});
