import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilitiesModule } from '../utilities/utilities.module';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksComponent } from './books.component';
import { BooksService } from './lib/books.service';
import { BookAddComponentComponent } from './book-add-component/book-add-component.component';

@NgModule({
  imports: [
    CommonModule,

    UtilitiesModule
  ],
  declarations: [BookCardComponent, BooksComponent, BookAddComponentComponent],
  exports: [BookCardComponent, BooksComponent],
  providers: [BooksService]
})
export class BooksModule { }
