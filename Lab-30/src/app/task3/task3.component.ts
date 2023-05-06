import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  users = [
    {id: 1, name: 'John Doe', birthdate: new Date(1998, 3, 15)},
    {id: 2, name: 'Jane Smith', birthdate: new Date(1990, 8, 25)},
    {id: 3, name: 'Bob Johnson', birthdate: new Date(1977, 5, 3)},
    {id: 4, name: 'Alice Williams', birthdate: new Date(1986, 1, 19)},
  ];
}
