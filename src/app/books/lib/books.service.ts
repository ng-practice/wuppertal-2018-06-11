import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable()
export class BooksService {
  private books = [
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

  getAll(): Book[] {
    return this.books;
  }

  add(book: Book): void {
    this.books.push(book);
  }
}
