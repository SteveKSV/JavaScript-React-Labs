import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {
  users = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'Peter', age: 40 },
    { name: 'Jane', age: 35 },
  ];
}
