import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  number: number | undefined;
  square: number | undefined;

  calculateSquare() {
    if (this.number) {
        this.square = this.number * this.number;
      }
    }
}
