import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivedComponent } from './archived.component';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [ArchivedComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    ArchivedComponent
  ]
})
export class ArchivedModule { }
