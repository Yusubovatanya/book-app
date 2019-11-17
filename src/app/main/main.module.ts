import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './components/main/main.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { EditBookModule } from './components/edit-book/edit-book.module';
import { ChartBookModule } from './components/chart-book/chart-book.module';
import { TableBookModule } from './components/table-book/table-book.module';



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    SharedModule,
    EditBookModule,
    TableBookModule,
    ChartBookModule,
  ]
})
export class MainModule { }
