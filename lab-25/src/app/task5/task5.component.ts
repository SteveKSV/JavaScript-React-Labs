import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {
  workers = [
    {name: 'Микола', age: 30, salary: 400},
    {name: 'Василь', age: 31, salary: 500},
    {name: 'Петро', age: 32, salary: 600},
  ];
}
