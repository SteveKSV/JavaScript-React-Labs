import { Component } from '@angular/core';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
  styleUrls: ['./task8.component.css']
})
export class Task8Component {
  languages = ['html', 'css', 'js', 'php'];

  changeLanguage() {
    const index = this.languages.indexOf('php');
    if (index !== -1) {
      this.languages[index] = 'sql';
    }
  }
}
