import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    CommonModule,
    NgDatepickerModule
  ],
  exports: [
    NgDatepickerModule
  ],
  declarations: []
})
export class SharedModule { }
