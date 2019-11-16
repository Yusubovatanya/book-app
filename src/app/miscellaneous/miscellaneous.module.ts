import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule,
  ],
  exports: [
    NotFoundComponent,
  ]
})
export class MiscellaneousModule { }
