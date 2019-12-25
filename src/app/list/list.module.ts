import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { NewsService } from '../services/news.service';
import { ListComponent } from './list.component';
import { CardModule } from '../card/card.module';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    CardModule
  ],
  providers: [
    NewsService
  ]
})
export class ListModule { }
