import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NewModel } from './models/news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front';
  archivedNews: NewModel[];
  news: NewModel[];

  constructor() {

  }

  ngOnInit() {
    this.archivedNews = [{
      content: 'Contenido',
      author: 'Álex Goia',
      date: new Date(),
      description: 'Descripción',
      title: 'Holi',
      archiveDate: new Date(),
      _id: '1'
    }];

    this.news = [{
      content: 'Contenido',
      author: 'Álex Goia',
      date: new Date(),
      description: 'Descripción',
      title: 'Holi',
      _id: '1'
    }];
  }



}
