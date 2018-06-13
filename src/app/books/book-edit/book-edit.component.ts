import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BooksService } from '../lib/books.service';
import { Book } from '../models/book';

@Component({
  selector: 'btc-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = {} as any;

  constructor(private route: ActivatedRoute, private books: BooksService) {}

  ngOnInit() {
    this.route.params
      .pipe(switchMap(params => this.books.getSingle(params.isbn)))
      .subscribe(book => (this.book = book));
  }
}
