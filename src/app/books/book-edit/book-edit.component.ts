import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { BooksService } from '../lib/books.service';
import { Book } from '../models/book';

@Component({
  selector: 'btc-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  private book: Book;
  bookForm: FormGroup;
  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private books: BooksService
  ) {}

  ngOnInit() {
    this.bookForm = this.buildForm();

    this.book$ = this.route.params.pipe(
      switchMap(params => this.books.getSingle(params.isbn)),
      tap(book => this.fillForm(book)),
      tap(book => (this.book = book))
    );
  }

  update() {
    const updatedBook = {
      ...this.book,
      ...this.bookForm.value,
      description: this.bookForm.controls.abstract.value
    };

    this.books.update(updatedBook).subscribe();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      isbn: ['', [Validators.required, Validators.minLength(5)]],
      title: ['', [Validators.required]],
      abstract: ['', [Validators.required]],
      rating: [0, [Validators.required]]
    });
  }

  private fillForm(book: Book) {
    this.bookForm.patchValue({
      isbn: book.isbn,
      title: book.title,
      abstract: book.abstract,
      rating: book.rating
    });
  }
}
