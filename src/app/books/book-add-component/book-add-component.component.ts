import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-add-component',
  templateUrl: './book-add-component.component.html',
  styleUrls: ['./book-add-component.component.css']
})
export class BookAddComponent {
  book = new Book('', '', '', [], 0);

  @Output() create = new EventEmitter<Book>();

  submitNewBook() {
    // const copy = Object.assign({}, this.book);
    this.create.emit({ ...this.book });
  }
}
