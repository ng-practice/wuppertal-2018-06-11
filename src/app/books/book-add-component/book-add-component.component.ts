import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'btc-book-add-component',
  templateUrl: './book-add-component.component.html',
  styleUrls: ['./book-add-component.component.css']
})
export class BookAddComponent {
  book = new Book('', '', '', [], 0);

  @Output() create = new EventEmitter<Book>();

  submitNewBook(form: NgForm) {
    // const copy = Object.assign({}, this.book);
    this.create.emit({ ...this.book });
    form.reset();
  }
}
