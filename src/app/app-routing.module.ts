import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BooksComponent } from './books/books.component';

const routes: Route[] = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
