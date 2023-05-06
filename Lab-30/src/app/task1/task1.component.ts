import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  users = [
    {id: 1, name: 'John Doe', age: 25},
    {id: 2, name: 'Jane Smith', age: 30},
    {id: 3, name: 'Bob Johnson', age: 40},
    {id: 4, name: 'Alice Williams', age: 35},
  ];
}
