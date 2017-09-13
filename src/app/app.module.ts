import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { StaffComponent } from './components/staff/staff.component';
import { DishTableComponent } from './components/dish-table/dish-table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DatepickerComponent,
    StaffComponent,
    DishTableComponent
  ],
  providers: [
    DataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
