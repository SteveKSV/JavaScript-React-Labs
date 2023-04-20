import { Component } from '@angular/core';

@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
  styleUrls: ['./task9.component.css']
})
export class Task9Component {
  languages = ['html', 'css', 'js', 'php'];
  shouldAddLanguage = false;

  addLanguage() {
    this.shouldAddLanguage ? this.languages :  this.languages.push('sql');
    this.shouldAddLanguage = true;
  }

  get updatedLanguages() {
    return this.shouldAddLanguage ? [...this.languages, 'sql'] : this.languages;
  }
}
