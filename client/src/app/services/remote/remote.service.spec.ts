//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { TestBed } from '@angular/core/testing';

import { RemoteService } from './remote.service';

describe('RemoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoteService = TestBed.get(RemoteService);
    expect(service).toBeTruthy();
  });
});
