import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksComponent } from './books.component';
import { BooksService } from './lib/books.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookCardComponent, BooksComponent],
  exports: [BookCardComponent, BooksComponent],
  providers: [BooksService]
})
export class BooksModule { }
