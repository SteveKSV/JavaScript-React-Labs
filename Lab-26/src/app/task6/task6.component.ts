import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {
  users = ['Микола', 'Василь', 'Петро'];
  remainingUsers = ['Аня', 'Валя', 'Маша'];

  addUser() {
    this.users.push(this.remainingUsers.shift()!);

    if (this.remainingUsers.length === 0) {
      this.users.sort();
    }
  }
}
