import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  currentDate: Date;
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.currentDate = new Date();
  }

  onChange(event: any) {
    console.log(event.value);
  }
}
