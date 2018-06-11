import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  // <app-book-card [book]="singeBook"></book>
  @Input() book: Book;
  // <app-book-card (rate)="sortBooks()"></app-book-card>
  @Output() rate = new EventEmitter<Book>();

  rateUp() {
    this.book.rating++;
    this.rate.emit(this.book);
  }

  rateDown() {
    this.book.rating--;
    this.rate.emit(this.book);
  }
}
