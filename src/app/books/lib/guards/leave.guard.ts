import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BookEditComponent } from '../../book-edit/book-edit.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<BookEditComponent> {
  canDeactivate(
    component: BookEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return window.confirm('Are you sure that you want to leave now?');
  }
}
