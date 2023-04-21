import { Component } from '@angular/core';

@Component({
  selector: 'app-task10',
  templateUrl: './task10.component.html',
  styleUrls: ['./task10.component.css']
})
export class Task10Component {
  countries = ['Ukraine', 'Poland', 'USA', 'Germany'];
  cities = [
    {name: 'Lviv', country: 'Ukraine'},
    {name: 'Kyiv', country: 'Ukraine'},
    {name: 'Krakow', country: 'Poland'},
    {name: 'Warsaw', country: 'Poland'},
    {name: 'New York', country: 'USA'},
    {name: 'Los Angeles', country: 'USA'},
    {name: 'Berlin', country: 'Germany'},
    {name: 'Munich', country: 'Germany'}
  ];
  selectedCountry = 'Ukraine';
  filteredCities: string[] = [];

  onCountryChange() {
    this.filteredCities = this.cities.filter(city => city.country === this.selectedCountry).map(city => city.name);
  }
}
