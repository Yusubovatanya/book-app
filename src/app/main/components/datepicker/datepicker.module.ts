import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { RangesFooterComponent } from './ranges-footer/ranges-footer.component';


@NgModule({
  declarations: [
    DatepickerComponent,
    RangesFooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SatDatepickerModule,
    SatNativeDateModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    DatepickerComponent,
  ],
  entryComponents: [
    RangesFooterComponent,
  ],
})
export class DatepickerModule { }
