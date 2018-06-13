import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BooksComponent } from './books.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Route[] = [
  { path: 'books', component: BooksComponent },
  { path: 'book/:isbn', component: BookEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
