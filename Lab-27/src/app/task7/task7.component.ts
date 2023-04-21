import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css']
})
export class Task7Component {
  courses = [
    { name: 'html', passed: true },
    { name: 'css', passed: true },
    { name: 'php', passed: false },
    { name: 'js', passed: true },
    { name: 'angular', passed: false }
  ];
}
