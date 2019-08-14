//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthResult } from 'src/app/models/remote';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Base server URL.
   */
  private baseUrl: string;

  readonly LoginPath = '/login';
  readonly LogoutPath = '/logout';

  constructor(private http: HttpClient, private configSvc: ConfigService) { }

  login(id: string, pass: string): Observable<AuthResult | {}> {
    this.getBaseUrl();

    return this.http.post<AuthResult>(
      this.baseUrl + this.LoginPath,
      {
        user: id,
        pass,
      }).pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('Error: Login: ' + err.status + ': ' + err.statusText);

          // TODO: Add custom handler that create more user frindly errors & throws again...

          return throwError(err);
        })
      );
  }

  logout(): Observable<boolean> {
    this.getBaseUrl();

    return of(true);
  }

  private getBaseUrl() {
    if (!this.baseUrl) {
      this.baseUrl = this.configSvc.getServerUrl();
      console.log(this.getBaseUrl());
    }
  }
}
