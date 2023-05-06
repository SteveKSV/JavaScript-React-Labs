import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css']
})
export class Task7Component {
  users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 },
  ];

  fields: string[] = ['name', 'age'];
  selectedField: string = 'name';
  isAscending: boolean = true;

  setSortField(field: string): void {
    if (this.selectedField === field) {
      this.isAscending = !this.isAscending;
    } else {
      this.selectedField = field;
      this.isAscending = true;
    }
  }

  get sortedUsers() {
    return this.users.sort((a, b) => {
      if (this.selectedField === 'name') {
        if (this.isAscending) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      } else if (this.selectedField === 'age') {
        if (this.isAscending) {
          return a.age - b.age;
        } else {
          return b.age - a.age;
        }
      } else {
        return 0;
      }
    });
  }
}
