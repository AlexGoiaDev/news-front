import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsModel } from '../models/news.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  new: NewsModel;

  @Output()
  deleteNew: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  archiveNew: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  delete(id) {
    this.deleteNew.emit(id);
  }

  archive(id) {
    this.archiveNew.emit(id);
  }

}
