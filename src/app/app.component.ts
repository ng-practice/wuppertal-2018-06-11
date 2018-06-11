import { Component } from '@angular/core';
import { Book } from './books/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workshop in Wuppertal';
  subtitle = 'Foundation Level';

  books = [
    new Book(
      '213-123-3123-43',
      'Angular 6',
      'One Framework for Web and Mobile',
      ['Misko Hervery', 'Igor Minar'],
      5
    ),
    new Book(
      '533-123-3123-41',
      'NodeJS',
      'Server Side JavaScript',
      ['Ryan Dahl'],
      4
    )
  ];

  sortBooks(book: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
    console.log(book);
  }
}
