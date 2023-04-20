import { Component } from '@angular/core';

@Component({
  selector: 'app-task12',
  templateUrl: './task12.component.html',
  styleUrls: ['./task12.component.css']
})
export class Task12Component {
  languages = ['html', 'css', 'js', 'php'];
  shouldDeleteLanguage = false;

  deleteLanguage() {
    this.shouldDeleteLanguage ? this.languages :  this.languages.shift();
    this.shouldDeleteLanguage = true;
  }
}
