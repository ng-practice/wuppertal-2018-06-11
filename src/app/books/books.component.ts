import { Component, OnInit } from '@angular/core';
import { BooksService } from './lib/books.service';
import { Book } from './models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.books = this.booksService.getAll();
  }

  sortBooks(book: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
    console.log(book);
  }
}
