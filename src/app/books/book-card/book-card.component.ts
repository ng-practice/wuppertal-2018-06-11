import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'btc-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  // <btc-book-card [book]="singeBook"></book>
  @Input() book: Book;
  // <btc-book-card (rate)="sortBooks()"></btc-book-card>
  @Output() rate = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<string>();

  rateUp() {
    this.book.rating++;
    this.rate.emit(this.book);
  }

  rateDown() {
    this.book.rating--;
    this.rate.emit(this.book);
  }

  deleteBook() {
    this.delete.emit(this.book.isbn);
  }
}
