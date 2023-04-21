import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {
  isChecked: boolean = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
}