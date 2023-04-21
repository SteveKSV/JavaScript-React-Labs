import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  checkboxes: boolean[] = [false, false, false, false];
  inputText = '';

  updateCheckboxes() {
    const values = this.inputText.split(',').map(Number);
    for (let i = 0; i < this.checkboxes.length; i++) {
      this.checkboxes[i] = values.includes(i);
    }
  }
}
