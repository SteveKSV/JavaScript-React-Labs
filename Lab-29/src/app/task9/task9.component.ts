import { Component } from '@angular/core';

@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
  styleUrls: ['./task9.component.css']
})
export class Task9Component {
  cities: string[] = ['Kyiv', 'Lviv', 'Odessa', 'Kharkiv'];
  selectedCity: string = '';
}
