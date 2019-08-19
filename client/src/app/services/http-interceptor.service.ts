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
import { FilterState } from '../store';
import { UserState } from '../store/user/user.state';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  private token: string;
  private session: AuthSession;

  private components: string[];
  private users: string[];
  private types: string[];
  private statuses: string[];
  private priorities: string[];
  private resolutions: string[];
  private fixVersions: string[];
  private affectedVersions: string[];

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

    this.subs.push(
      this.store.select(FilterState.getComponents).subscribe((arg) => {
        this.components = arg;
      }));

    this.subs.push(
      this.store.select(FilterState.getUsers).subscribe((arg) => {
        this.users = arg;
      }));

    this.subs.push(
      this.store.select(FilterState.getTypes).subscribe((arg) => {
        this.types = arg;
      }));

    this.subs.push(
      this.store.select(FilterState.getStatuses).subscribe((arg) => {
        this.statuses = arg;
      }));

    this.subs.push(
      this.store.select(FilterState.getPriorities).subscribe((arg) => {
        this.priorities = arg;
      }));

    this.subs.push(
      this.store.select(FilterState.getResolutions).subscribe((arg) => {
        this.resolutions = arg;
      }));

    this.subs.push(
      this.store.select(FilterState.getFixVersions).subscribe((arg) => {
        this.fixVersions = arg;
      }));

    this.subs.push(
      this.store.select(FilterState.getAffectedVersions).subscribe((arg) => {
        this.affectedVersions = arg;
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

      if (this.components && this.components.length > 0) {
        req = req.clone({
          headers: req.headers.set('insight-comps', this.components.join(',')),
        });
      }

      if (this.users && this.users.length > 0) {
        req = req.clone({
          headers: req.headers.set('insight-users', this.users.join(',')),
        });
      }

      if (this.types && this.types.length > 0) {
        req = req.clone({
          headers: req.headers.set('insight-types', this.types.join(',')),
        });
      }

      if (this.statuses && this.statuses.length > 0) {
        req = req.clone({
          headers: req.headers.set('insight-statuses', this.statuses.join(',')),
        });
      }

      if (this.priorities && this.priorities.length > 0) {
        req = req.clone({
          headers: req.headers.set('insight-priorities', this.priorities.join(',')),
        });
      }

      if (this.resolutions && this.resolutions.length > 0) {
        req = req.clone({
          headers: req.headers.set('insight-resolutions', this.resolutions.join(',')),
        });
      }

      if (this.fixVersions && this.fixVersions.length > 0) {
        req = req.clone({
          headers: req.headers.set('insight-fix-versions', this.fixVersions.join(',')),
        });
      }

      if (this.affectedVersions && this.affectedVersions.length > 0) {
        req = req.clone({
          headers: req.headers.set('insight-aff-versions', this.affectedVersions.join(',')),
        });
      }
    }

    return next.handle(req);
  }
}
