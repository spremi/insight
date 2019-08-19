//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { inject, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

const MockRouter = {
  navigate: jasmine.createSpy('navigate'),
};

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: MockRouter },
        AuthGuard,
      ],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
