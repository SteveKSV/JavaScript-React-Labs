import { Component } from '@angular/core';

@Component({
  selector: 'app-task10',
  templateUrl: './task10.component.html',
  styleUrls: ['./task10.component.css']
})
export class Task10Component {
  languages = ['html', 'css', 'js', 'php'];
  shouldAddLanguage = false;

  addLanguage() {
    this.shouldAddLanguage ? this.languages :  this.languages.unshift('sql');
    this.shouldAddLanguage = true;
  }

  get updatedLanguages() {
    return this.shouldAddLanguage ? [...this.languages, 'sql'] : this.languages;
  }
}
