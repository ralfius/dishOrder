import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dish-table',
  templateUrl: './dish-table.component.html',
  styleUrls: ['./dish-table.component.scss']
})

export class DishTableComponent {

  dishOrders = data;
  dishes = dishesDate;
}
export interface Element {
  dishId: string;
  quantity: number;
}

export interface Dish {
  id: string;
  name: string;
}

const data: Element[] = [
  {dishId: 'dishes_1', quantity: 1},
  {dishId: 'dishes_3', quantity: 2},
  {dishId: 'dishes_5', quantity: 3},
];

const dishesDate: Dish[] = [
  {
    id: 'dishes_1',
    name: 'Pasta'
  },
  {
    id: 'dishes_2',
    name: 'Noodle'
  },
  {
    id: 'dishes_3',
    name: 'Omlette'
  },
  {
    id: 'dishes_4',
    name: 'Meatball'
  },
  {
    id: 'dishes_5',
    name: 'Pie'
  },
  {
    id: 'dishes_6',
    name: 'Pizza'
  },
  {
    id: 'dishes_7',
    name: 'Risotto'
  },
];


