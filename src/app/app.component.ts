import { Component } from '@angular/core';
import { Book } from './books/models/book';
import { BooksService } from './books/lib/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workshop in Wuppertal';
  subtitle = 'Foundation Level';

  books = this.booksService.getAll();

  constructor(private booksService: BooksService) {}

  sortBooks(book: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
    console.log(book);
  }
}
