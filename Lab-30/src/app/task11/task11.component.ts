import { Component } from '@angular/core';

@Component({
  selector: 'app-task11',
  templateUrl: './task11.component.html',
  styleUrls: ['./task11.component.css']
})
export class Task11Component {
  users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 35 },
    { name: 'Eve', age: 28 },
  ];

  filterUsers() {
    return this.users.filter(user => user.name.toLowerCase().includes('A'.toLowerCase()));
  }
}
