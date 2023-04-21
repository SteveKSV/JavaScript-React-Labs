import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  countries = ['Ukraine', 'Russia', 'Belarus', 'Poland', 'Germany', 'France'];

  addCountry(newCountry: string) {
    this.countries.push(newCountry);
    this.sortCountries();
  }

  removeCountry(countryName: string) {
    const index = this.countries.findIndex(country => country.toLowerCase() === countryName.toLowerCase());
    if (index !== -1) {
      this.countries.splice(index, 1);
    }
  }

  private sortCountries() {
    this.countries.sort((a, b) => a.localeCompare(b));
  }
}
