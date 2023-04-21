import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  isVisible = true;

  hide() {
    this.isVisible = false;
  }

  show() {
    this.isVisible = true;
  }
}
