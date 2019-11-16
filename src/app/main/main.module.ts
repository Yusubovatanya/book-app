import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './components/main/main.component';
import { TableBookComponent } from './components/table-book/table-book.component';
import { ChartBookComponent } from './components/chart-book/chart-book.component';
import { MaterialModule } from '../material/material.module';

import { MatSortModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { DatepickerModule } from './components/datepicker/datepicker.module';



@NgModule({
  declarations: [
    MainComponent,
    TableBookComponent,
    ChartBookComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    MatSortModule, 
    SharedModule,
    DatepickerModule,
  ]
})
export class MainModule { }
