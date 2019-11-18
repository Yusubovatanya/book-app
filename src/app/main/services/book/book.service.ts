import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { DataColor } from 'src/app/core/models/data-color.model';
import { Data } from 'src/app/core/models/data.model';



@Injectable({
  providedIn: 'root'
})
export class BookService {
  data:Data[] = [];
  years = [];
  color = '#c0baba';
  colorBg = '#673ab7';
  private changeDate$ = new Subject<boolean>();
  maxObj: any;

  typeSortPeriod: Array<{ key: string, label: string }> = [
    { key: 'month', label: 'За этот месяц' },
    { key: 'year', label: 'за этот год' },
    { key: 'all', label: 'за весь период' },
  ];

  month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];



  constructor() { }

  getChartColor(list) {
    const arr: DataColor[] = [{
      backgroundColor: [],
      hoverBackgroundColor: [],
    }];
    list.forEach(() => {
      arr[0].backgroundColor.push(this.color);
      arr[0].hoverBackgroundColor.push(this.colorBg);
    });
    return arr;
  }

  prepareDate(dataList) {
    dataList.forEach(book => {
      book = this.formateDate(book);
      book.isToggle = false;
    });
    this.data = dataList;
    this.identMaxObj(dataList);
    return dataList;
  }

  identMaxObj(dataList) {
    this.maxObj = dataList.reduce((prev, cur) => cur.PublishDate > prev.PublishDate ? cur : prev, { PublishDate: -Infinity });
  }

  formateDate(book) {
    book.oldFormat = book.PublishDate;
    book.PublishDate = +moment(moment(book.PublishDate).format('YY MM DD'), 'YYYY MM DD').format('x');
    return book;
  }

  toggleRow(id) {
    this.data.forEach(book => {
      if (book.ID === id) {
        book.isToggle = !book.isToggle;
      }
    });
  }

  getChangeDatePicker() {
    return this.changeDate$.asObservable();
  }

  changeDatePicker(date) {
    this.changeDate$.next(date);
  }

  filterBookList(query) {
    const begin = +moment(query.begin).format('x');
    const end = +moment(query.end).format('x');

    let filterArr = [];
    filterArr = this.data.filter((book) => {
      return book.PublishDate <= end && book.PublishDate >= begin;
    });
    return filterArr;
  }

  changeEditBook(editBook) {
    this.data.map((book, index) => {
      if (book.ID === editBook.ID) {
        this.data[index] = editBook;
      }
    });
    return this.data;
  }

  formateChartDate() {
    this.data.forEach((book) => {
      book.ChartYearPublishDate = +moment(book.PublishDate).format('YYYY');
      book.ChartMonthPublishDate = moment(book.PublishDate).format('MMMM');
    });
    return this.data;
  }

  prepareChartDate() {
    const arr = this.data.map((book: any) => book.ChartYearPublishDate);
    this.years = arr.filter((v, i, a) => a.indexOf(v) === i);
    if (this.years.length <= 1) {
      let previous = this.years[0] - 1;
      let next = this.years[0] + 1;
      this.years.push(next, next--, next--);
      this.years.unshift(previous, previous++, previous++);
    }
    return this.years;
  }

  prepareChartData(isMonth) {
    let bookKeyDate = '';
    let keys = [];
    const arr = [];

    if (isMonth) {
      bookKeyDate = 'ChartMonthPublishDate';
      keys = this.month;
    } else {
      bookKeyDate = 'ChartYearPublishDate';
      keys = this.years;
    }

    keys.forEach(key => {
      let qty = 0;
      this.data.forEach((book: any) => {
        if (book[bookKeyDate] === key) {
          qty++;
        }
      });
      arr.push(qty);
    });
    return arr;
  }
}
