import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  countries = ['Ukraine', 'Russia', 'Belarus', 'Poland', 'Germany', 'France'];
  deleteIndex: number | undefined;

  addCountry(newCountry: string) {
    this.countries.push(newCountry);
    this.sortCountries();
  }

  deleteCountry() {
    if (this.deleteIndex && this.deleteIndex > 0 && this.deleteIndex <= this.countries.length) {
      this.countries.splice(this.deleteIndex - 1, 1);
      this.deleteIndex = undefined;
    }
  }

  private sortCountries() {
    this.countries.sort((a, b) => a.localeCompare(b));
  }
}
