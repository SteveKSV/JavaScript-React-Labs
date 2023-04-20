import { Component } from '@angular/core';

@Component({
  selector: 'app-task11',
  templateUrl: './task11.component.html',
  styleUrls: ['./task11.component.css']
})
export class Task11Component {
  languages = ['html', 'css', 'js', 'php'];
  shouldDeleteLanguage = false;

  deleteLanguage() {
    this.shouldDeleteLanguage ? this.languages :  this.languages.pop();
    this.shouldDeleteLanguage = true;
  }
}
