import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';



@Injectable({
  providedIn: 'root'
})

export class BookCoreService {
  url = 'https://fakerestapi.azurewebsites.net/api/Books';

  constructor(
    private http: HttpClient,
  ) { }

  getBooks() {
    return this.http.get(`${this.url}`);
  }

  editBook(book) {
    book.PublishDate = moment(book.PublishDate).format();
    return this.http.put(`${this.url}/${book.ID}`, book);
  }
}
