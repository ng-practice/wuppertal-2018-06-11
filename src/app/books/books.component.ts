import { Component, OnInit } from '@angular/core';
import { BooksService } from './lib/books.service';
import { Book } from './models/book';
import { switchMap, finalize } from 'rxjs/operators';

@Component({
  selector: 'btc-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[];
  errorMessage: string;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService
      .getAll()
      .subscribe(
        books => (this.books = books),
        () => {},
        () => console.info('COMPLETED')
      );
  }

  sortBooks(book: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
  }

  addBook(book: Book) {
    this.booksService
      .add(book)
      .pipe(switchMap(() => this.booksService.getAll()))
      .subscribe(books => (this.books = books));
  }

  deleteBook(isbn: string) {
    this.booksService
      .delete(isbn)
      .pipe(
        finalize(() =>
          this.booksService.getAll().subscribe(books => (this.books = books))
        )
      )
      .subscribe(() => {}, errorMessage => (this.errorMessage = errorMessage));
  }
}
