import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsService } from '../services/news.service';


@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    AddRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    NewsService
  ]
})
export class AddModule { }
