import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections/sections.component';
import { ThemeModule } from '../theme/theme.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SectionsComponent,
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    ThemeModule,
    MiscellaneousModule,
    MaterialModule,
  ]
})
export class SectionsModule { }
