import { Component, OnInit } from '@angular/core';
import { NewsModel } from './models/news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front';
  archivedNews: NewsModel[];
  news: NewsModel[];

  constructor() {

  }

  ngOnInit() {
  }

}
