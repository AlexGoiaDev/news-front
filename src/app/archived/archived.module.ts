import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivedComponent } from './archived.component';



@NgModule({
  declarations: [ArchivedComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ArchivedComponent
  ]
})
export class ArchivedModule { }
