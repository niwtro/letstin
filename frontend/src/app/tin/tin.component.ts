import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'letstin-tin',
  templateUrl: './tin.component.html',
  styleUrls: ['./tin.component.scss']
})
export class TinComponent implements OnInit {
  
  options: DatepickerOptions = {
    minYear: 2018,
    maxYear: 2018,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
    barTitleIfEmpty: 'Click to select a date'
  };

  date = Date.now() as Number;
  activity = "" as string;

  constructor() { }

  ngOnInit() {
  }

}
