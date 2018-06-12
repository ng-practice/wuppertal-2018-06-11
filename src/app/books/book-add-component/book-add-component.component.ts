import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-add-component',
  templateUrl: './book-add-component.component.html',
  styleUrls: ['./book-add-component.component.css']
})
export class BookAddComponentComponent {
  @Output() create = new EventEmitter<Book>();

  submitNewBook(
    isbn: HTMLInputElement,
    title: HTMLInputElement,
    abstract: HTMLInputElement
  ) {
    const book = new Book(
      isbn.value,
      title.value,
      abstract.value,
      [],
      0
    );

    this.create.emit(book);
  }
}
