import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {
  numberList: number[] = [1, 2, 3, 4, 5];
  sum: number = this.numberList.reduce((a, b) => a + b, 0);
  newNumber: number = 0;

  addNumber() {
    this.numberList.push(this.newNumber);
    this.sum += this.newNumber;
    this.newNumber = 0;
  }
}
