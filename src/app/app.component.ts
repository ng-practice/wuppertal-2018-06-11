import { Component } from '@angular/core';
import { Book } from './books/models/book';
import { BooksService } from './books/lib/books.service';

@Component({
  selector: 'btc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workshop in Wuppertal';
  subtitle = 'Foundation Level';
}
