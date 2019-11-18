import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BookService } from 'src/app/main/services/book/book.service';
import { RangesFooterComponent } from '../ranges-footer/ranges-footer.component';



@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  form: FormGroup;
  rangesFooter = RangesFooterComponent;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.builtForm();
  }

  builtForm() {
    this.form = this.fb.group({
      date: [{ begin: new Date(), end: new Date() }]
    });
  }

  changeRange(event) {
    this.bookService.changeDatePicker(event.value);
  }
}
