import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'letstin-tin',
  templateUrl: './tin.component.html',
  styleUrls: ['./tin.component.scss']
})
export class TinComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  activity = "" as string;

  constructor() { }

  ngOnInit() {
  }

}
