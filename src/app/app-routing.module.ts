import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Route[] = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', loadChildren: './books/books.module#BooksModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
