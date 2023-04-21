import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {
  isChecked1 = false;
  isChecked2 = false;

  onChangeCheckbox1() {
    this.isChecked2 = this.isChecked1;
  }
}
