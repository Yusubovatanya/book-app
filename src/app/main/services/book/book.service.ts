import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  data = [];
  private changeDate$ = new Subject<boolean>();
  maxObj: any;

  constructor() { }

  prepareDate(dataList) {
    dataList.forEach(book => {
      book.oldFormat = book.PublishDate;
      book.PublishDate = +moment(moment(book.PublishDate).format('YY MM DD'), 'YYYY MM DD').format('x');
      book.isToggle = false;
    });
    this.data = dataList;
    this.maxObj = dataList.reduce((prev, cur) => cur.PublishDate > prev.PublishDate ? cur : prev, { PublishDate: -Infinity });
    return dataList;
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
    console.log(query);
    const begin = +moment(query.begin).format('x');
    const end = +moment(query.end).format('x');

    let filterArr = [];
    filterArr = this.data.filter(function (book) {
      console.log(
        book.PublishDate <= end && book.PublishDate >= begin,
        book.PublishDate,
        book.oldFormat,
        query.begin,
        begin,
        query.end,
        end
      )
      return book.PublishDate <= end && book.PublishDate >= begin;
    })

    console.log(this.data === filterArr);
    return filterArr;
    // this.data.forEach(book => {
    //   filterArr.push(book)
    //   // if (book.PublishDate >= end && book.PublishDate >= begin) {
    //   //   filterArr.push(book);
    //   // }
    // });
    // return arr.filter(function (book) {
    //   return book.PublishDate >= end && book.PublishDate >= begin;
    // })
  }

}
