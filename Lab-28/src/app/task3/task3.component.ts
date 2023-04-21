import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  countries = ['Ukraine', 'Poland', 'Russia', 'Germany', 'France', 'Italy'];
  onlyWithP = false;

  get filteredCountries() {
    if (this.onlyWithP) {
      return this.countries.filter((country) => country.toLowerCase().includes('p'));
    }
    return this.countries;
  }
}
