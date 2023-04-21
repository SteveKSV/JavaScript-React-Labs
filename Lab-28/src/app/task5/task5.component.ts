import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {
  userList = ['Микола', 'Василь', 'Петро'];
  secondList = ['Іван', 'Дмитро', 'Андрій'];

  moveUser() {
    if (this.secondList.length > 0) {
      const user = this.secondList.shift();
      if (user) {
        this.userList.push(user);
      }
    }
  }
}
