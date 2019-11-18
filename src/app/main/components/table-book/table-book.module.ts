import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBookComponent } from './table-book.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DatepickerModule } from '../datepicker/datepicker.module';
import { MatSortModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TableBookComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DatepickerModule,
    MatSortModule,
    SharedModule,
  ],
  exports: [
    TableBookComponent,
  ]
})
export class TableBookModule { }
