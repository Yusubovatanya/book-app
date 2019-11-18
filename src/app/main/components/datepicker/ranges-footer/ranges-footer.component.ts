import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';
import { SatCalendarFooter, SatCalendar, SatDatepicker, DateAdapter } from 'saturn-datepicker';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BookService } from 'src/app/main/services/book/book.service';

@Component({
  selector: 'app-ranges-footer',
  templateUrl: './ranges-footer.component.html',
  styleUrls: ['./ranges-footer.component.scss']
})

export class RangesFooterComponent<Date> implements SatCalendarFooter<Date>, OnInit {
  ranges: any;
  destroyed = new Subject<void>();

  constructor(
    private bookService: BookService,
    private calendar: SatCalendar<Date>,
    private datePicker: SatDatepicker<Date>,
    private dateAdapter: DateAdapter<Date>,
    cdr: ChangeDetectorRef,
  ) {
    calendar.stateChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnInit() {
    this.ranges = this.bookService.typeSortPeriod;
  }

  setRange(range: string) {
    switch (range) {
      case 'month':
        this.calendar.beginDate = this.dateAdapter.deserialize(moment().startOf('month').toDate());
        this.calendar.endDate = this.dateAdapter.deserialize(moment().endOf('month').toDate());
        this.calendar.activeDate = this.calendar.beginDate;
        break;
      case 'year':
        this.calendar.beginDate = this.dateAdapter.deserialize(moment().startOf('year').toDate());
        this.calendar.endDate = this.dateAdapter.deserialize(moment().endOf('year').toDate());
        break;
      case 'all':
          this.calendar.beginDate = this.dateAdapter.deserialize(moment(this.bookService.maxObj.PublishDate, 'YYYY').toDate());
          this.calendar.endDate = this.dateAdapter.deserialize(moment().endOf('year').toDate());
    }
    this.calendar.activeDate = this.calendar.beginDate;
    this.calendar.beginDateSelectedChange.emit(this.calendar.beginDate);
    const rageDate = { begin: this.calendar.beginDate, end: this.calendar.endDate };
    this.calendar.dateRangesChange.emit(rageDate);
    this.datePicker.close();
  }
}
