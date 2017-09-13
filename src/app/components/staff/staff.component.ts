import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {
  Workers = data;
}

export interface Worker {
  name: string;
}

const data: Worker[] = [
  {name: 'Name1'},
  {name: 'Name2'},
  {name: 'Name3'},
];
