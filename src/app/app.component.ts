import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workshop in Wuppertal';
  subtitle = 'Foundation Level';

  singleBook = {
    title: 'Angular 6'
  };
}
