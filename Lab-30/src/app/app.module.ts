import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { Task5Component } from './task5/task5.component';
import { Task6Component } from './task6/task6.component';
import { Task7Component } from './task7/task7.component';
import { Task8Component } from './task8/task8.component';
import { Task9Component } from './task9/task9.component';
import { Task10Component } from './task10/task10.component';
import { Task11Component } from './task11/task11.component';
import { Task12Component } from './task12/task12.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    Task6Component,
    Task7Component,
    Task8Component,
    Task9Component,
    Task10Component,
    Task11Component,
    Task12Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
