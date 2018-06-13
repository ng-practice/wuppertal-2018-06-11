import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BooksService } from '../lib/books.service';
import { Book } from '../models/book';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'btc-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = {} as any;
  book$: Observable<Book>;

  subscription: Subscription;

  today = new Date();

  constructor(private route: ActivatedRoute, private books: BooksService) {}

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      switchMap(params => this.books.getSingle(params.isbn))
    );
  }
}
