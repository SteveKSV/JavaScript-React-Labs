import { Component } from '@angular/core';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
  styleUrls: ['./task8.component.css']
})
export class Task8Component {
  countries: string[] = ['Україна', 'Росія', 'США', 'Канада', 'Франція', 'Німеччина', 'Італія'];
  selectedCountry: string = '';
}
