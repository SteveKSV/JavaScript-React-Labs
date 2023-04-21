import { Component } from '@angular/core';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
  styleUrls: ['./task8.component.css']
})
export class Task8Component {
  countries = [
    { name: 'Україна', cities: ['Київ', 'Львів'] },
    { name: 'Польща', cities: ['Варшава', 'Лодзь'] },
    { name: 'Великобританія', cities: ['Лондон', 'Манчестер'] },
  ];
}
