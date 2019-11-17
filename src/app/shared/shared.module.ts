import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExportExcelButtonComponent } from './export-excel-button/export-excel-button.component';



@NgModule({
  declarations: [
  ExportExcelButtonComponent,
],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    FlexLayoutModule,
    ExportExcelButtonComponent,
  ]
})
export class SharedModule { }
