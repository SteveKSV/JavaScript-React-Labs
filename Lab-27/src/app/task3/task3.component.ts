import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  countries = ['Україна', 'Польща', 'Великобританія'];
  newCountry: string | undefined;

  addCountry() {
    if (this.newCountry) {
      this.countries.push(this.newCountry);
      this.newCountry = undefined;
    }
  }
}
