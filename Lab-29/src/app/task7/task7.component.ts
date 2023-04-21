import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css']
})
export class Task7Component {
  isRed = false;
  isLineThrough = false;

  toggleRed() {
    this.isRed = !this.isRed;
  }

  toggleLineThrough() {
    this.isLineThrough = !this.isLineThrough;
  }
}
