import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {
  users = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'Peter', age: 40 },
    { name: 'Jane', age: 35 },
  ];

  isAscending: boolean = true;

  get sortedUsers() {
    return this.users.sort((a, b) => {
      if (this.isAscending) {
        return a.age - b.age;
      } else {
        return b.age - a.age;
      }
    });
  }
}
