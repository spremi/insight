//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AuthSession } from '../models/remote';
import { UserState } from '../store/user/user.state';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  private token: string;
  private session: AuthSession;

  private subs: Subscription[] = [];

  constructor(private store: Store) {
    this.subs.push(
      this.store.select(UserState.getToken).subscribe((arg) => {
        this.token = arg;
      }));

    this.subs.push(
      this.store.select(UserState.getSession).subscribe((arg) => {
        this.session = arg;
      }));
  }

  ngOnDestory() {
    this.subs.forEach((sub) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Accept')) {
      req = req.clone({
        headers: req.headers.set('Accept', 'application/json'),
      });
    }

    if (this.token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.token),
      });
    }

    if (this.session) {
      req = req.clone({
        headers: req.headers.set('insight-sess-n', this.session.name),
      });
      req = req.clone({
        headers: req.headers.set('insight-sess-v', this.session.value),
      });
    }

    return next.handle(req);
  }
}
