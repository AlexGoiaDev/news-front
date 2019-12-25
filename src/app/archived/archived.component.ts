import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NewModel } from '../models/news.model';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArchivedComponent implements OnInit {
  @Input()
  archivedNews: NewModel[];

  constructor() { }

  ngOnInit() {
  }



}
