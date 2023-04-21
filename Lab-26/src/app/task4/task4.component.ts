import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  items = [3, 5, 2, 1, 4];

  sortList() {
    this.items.sort();
  }
}
