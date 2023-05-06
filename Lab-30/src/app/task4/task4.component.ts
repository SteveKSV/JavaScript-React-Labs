import { Component } from '@angular/core';
@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  users = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'Peter', age: 40 },
    { name: 'Jane', age: 35 },
  ];
}
