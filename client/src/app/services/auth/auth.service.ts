//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() { }

  login(id: string, pass: string): Observable<string> {
    return of('TOKEN');
  }

  logout(): Observable<boolean> {
    return of(true);
  }
}
