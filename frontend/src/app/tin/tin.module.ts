import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinComponent } from './tin.component'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TinComponent
  ],
  declarations: [
    TinComponent
  ]
})
export class TinModule { }
