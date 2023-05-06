import { Component } from '@angular/core';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
  styleUrls: ['./task8.component.css']
})
export class Task8Component {
  users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Alice', age: 28 },
    { name: 'Dave', age: 22 },
  ];
}
