import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilitiesModule } from '../utilities/utilities.module';
import { BookAddComponent } from './book-add-component/book-add-component.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BooksService } from './lib/books.service';
import { BookEditComponent } from './book-edit/book-edit.component';
import { IsbnPipe } from './lib/pipes/isbn.pipe';
import { IsbnValidator } from './lib/validators/isbn.validator';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilitiesModule,

    BooksRoutingModule
  ],
  declarations: [
    BookCardComponent,
    BooksComponent,
    BookAddComponent,
    BookEditComponent,
    IsbnPipe
  ],
  exports: [BookCardComponent, BooksComponent],
  providers: [BooksService, IsbnValidator]
})
export class BooksModule {}
