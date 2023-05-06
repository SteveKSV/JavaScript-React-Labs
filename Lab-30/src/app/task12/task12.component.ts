import { Component } from '@angular/core';

@Component({
  selector: 'app-task12',
  templateUrl: './task12.component.html',
  styleUrls: ['./task12.component.css']
})
export class Task12Component {
  users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 35 },
    { name: 'Eve', age: 28 },
  ];

  searchText = '';

  filterUsers() {
    return this.users.filter(user => user.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
