//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ConfigData } from 'src/app/models/config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  config: ConfigData;

  constructor(private http: HttpClient) { }

  load(): Observable<boolean> {
    if (this.config) {
      return of(true);
    } else {
      return this.http.get('/assets/config.json').pipe(
        tap((data: ConfigData) => {
          this.config = data;
        }),
        map((data) => !!data),
        catchError((err) => throwError(err.json().error))
      );
    }
  }

  set(arg: ConfigData): void {
    this.config = arg;
  }

  get(): ConfigData {
    return this.config;
  }

  getServerUrl(): string {
    return this.config && this.config.server ? this.config.server.url : null;
  }
}
