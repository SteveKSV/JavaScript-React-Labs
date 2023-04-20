import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css']
})
export class Task7Component {
  name = 'Іван';
  surname = 'Іванів';
  age = 25;

  changeName() {
    this.name = 'Петро';
  }

  changeSurname() {
    this.surname = 'Петренко';
  }

  changeAge() {
    this.age = 30;
  }
}
