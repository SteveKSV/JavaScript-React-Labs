import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  isVisible = true;

  hide() {
    this.isVisible = false;
  }

  show() {
    this.isVisible = true;
  }
}
