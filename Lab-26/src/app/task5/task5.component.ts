import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {
  languages = ['html', 'css', 'js', 'php'];

  addPlusSign(index: number) {
    this.languages[index] += '+';
  }
}
