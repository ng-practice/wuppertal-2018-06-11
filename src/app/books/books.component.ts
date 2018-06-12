import { Component, OnInit } from '@angular/core';
import { BooksService } from './lib/books.service';
import { Book } from './models/book';

@Component({
  selector: 'btc-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getAll().subscribe(books => (this.books = books));
  }

  sortBooks(book: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
    console.log(book);
  }

  addBook(book: Book) {
    this.booksService.add(book);
  }
}
