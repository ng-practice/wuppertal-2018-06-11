import { Component, OnInit } from '@angular/core';
import { BooksService } from './lib/books.service';
import { Book } from './models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = this.booksService.getAll();

  constructor(private booksService: BooksService) {}

  sortBooks(book: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
    console.log(book);
  }

  ngOnInit() {
  }

}
