import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Data } from 'src/app/core/models/data.model';



@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  preparePdfData(data) {
    let arr = [];
    arr.push(['Title', 'PageCount', 'PublishDate', 'Description', 'Excerpt']);
    data.forEach((book: Data) => {
      let part = [book.Title, book.PageCount, this.prepareTableDate(book.PublishDate), book.Description, book.Excerpt];
      arr.push(part);
    })
    return arr;
  }

  prepareTableDate(date) {
    return moment(date).format('YYYY-MM-DD');
  }

  prepareExcelData(data): Data[] {
    return data.map((book: Data) => {
      return {
        Title: book.Title,
        PageCount: book.PageCount,
        PublishDate: this.prepareTableDate(book.PublishDate),
        Description: book.Description,
        Excerpt: book.Excerpt,
      };
    });
  }
}
