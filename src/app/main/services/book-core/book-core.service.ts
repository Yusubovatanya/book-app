import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BookCoreService {
  typeSortPeriod: Array<{ key: string, label: string }> = [
    { key: 'month', label: 'За этот месяц' },
    { key: 'year', label: 'за этот год' },
    { key: 'all', label: 'за весь период' },
  ];

  url = 'https://fakerestapi.azurewebsites.net/api/Books';

  constructor(
    private http: HttpClient,
  ) { }

  getBooks() {
    return this.http.get(`${this.url}`);
  }
}
