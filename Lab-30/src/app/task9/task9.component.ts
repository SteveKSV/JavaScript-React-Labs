import { Component } from '@angular/core';

@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
  styleUrls: ['./task9.component.css']
})
export class Task9Component {
  users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Alice', age: 28 },
    { name: 'Dave', age: 22 },
    { name: 'Mary', age: 26 },
    { name: 'Peter', age: 24 },
    { name: 'Sarah', age: 31 },
  ];
}
