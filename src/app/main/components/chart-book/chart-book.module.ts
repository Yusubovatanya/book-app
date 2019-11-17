import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartBookComponent } from './chart-book.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChartBookComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule,
    FormsModule,
  ],
  exports: [
    ChartBookComponent,
  ]
})
export class ChartBookModule { }
