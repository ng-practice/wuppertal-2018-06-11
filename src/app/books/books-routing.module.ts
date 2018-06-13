import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BooksComponent } from './books.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { LeaveGuard } from './lib/guards/leave.guard';

const routes: Route[] = [
  { path: 'books', component: BooksComponent },
  {
    path: 'book/:isbn',
    component: BookEditComponent,
    canDeactivate: [LeaveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LeaveGuard]
})
export class BooksRoutingModule {}
