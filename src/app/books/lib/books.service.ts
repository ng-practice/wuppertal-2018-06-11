import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '../models/book';

@Injectable()
export class BooksService {
  api = 'http://localhost:4280';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http
      .get<any[]>(`${this.api}/books`)
      .pipe(
        map(booksRaw => booksRaw.map(b => new Book(
          b.isbn,
          b.title,
          b.description,
          b.authors,
          b.rating,
          b.cover
        )))
      );
  }

  add(book: Book): Observable<void> {
    return this.http.post<void>(`${this.api}/book`, book);
  }
}
