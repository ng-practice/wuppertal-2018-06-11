import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable()
export class BooksService {
  api = 'http://localhost:4280';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http
      .get<any[]>(`${this.api}/books`)
      .pipe(map(booksRaw => booksRaw.map(bookRaw => this.createBook(bookRaw))));
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get(`${this.api}/book/${isbn}`)
      .pipe(map(bookRaw => this.createBook(bookRaw)));
  }

  private createBook(bookRaw: any): Book {
    return new Book(
      bookRaw.isbn,
      bookRaw.title,
      bookRaw.description,
      bookRaw.authors,
      bookRaw.rating,
      bookRaw.cover
    );
  }

  getAllSortedByRating(): Observable<Book[]> {
    return this.getAll().pipe(
      map(books => books.sort((a, b) => b.rating - a.rating))
    );
  }

  add(book: Book): Observable<void> {
    return this.http.post<void>(`${this.api}/book`, book);
  }

  update(book: Book): Observable<void> {
    return this.http.put<void>(`${this.api}/book`, book);
  }

  delete(isbn: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/book/${isbn}`).pipe(
      // catchError(err => empty())
      catchError(() =>
        throwError('Uups, an error was thrown deleting your book')
      )
    );
  }
}
