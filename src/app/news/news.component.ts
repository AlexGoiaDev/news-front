import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NewModel } from '../models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {
  @Input()
  news: NewModel[];

  constructor() { }

  ngOnInit() {
  }

}
