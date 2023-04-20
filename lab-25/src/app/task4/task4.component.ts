import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  countryAndTowns = {
    Варшава: 'Польща',
    Вільнюс: 'Литва',
    Київ: 'Україна',
  }
}
