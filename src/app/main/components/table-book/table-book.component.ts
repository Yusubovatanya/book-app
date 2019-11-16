import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookCoreService } from '../../services/book-core/book-core.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, forkJoin, of, Subscription } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { BookService } from '../../services/book/book.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.component.html',
  styleUrls: ['./table-book.component.scss']
})
export class TableBookComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['Title', 'PageCount', 'PublishDate', 'Description', 'Excerpt'];
  dataSource: MatTableDataSource<any>;
  dataSourceService: any;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  changeDateSubscription: Subscription;

  constructor(
    private bookCoreService: BookCoreService,
    private bookService: BookService,
    public router: Router,
  ) {
  }

  ngOnInit() {
    this.changeDateSubscription = this.bookService.getChangeDatePicker().subscribe(date => {
      this.dataSourceService = [];
      this.dataSourceService = this.bookService.filterBookList(date);
      this.dataSource = new MatTableDataSource(this.dataSourceService);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return forkJoin(
            this.bookCoreService.getBooks()
          );
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          return data[0];
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return of([]);
        })
      ).subscribe((data: any) => {
        this.dataSourceService = data;
        this.dataSourceService = this.bookService.prepareDate(this.dataSourceService);
        this.dataSource = new MatTableDataSource(this.dataSourceService);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSourceService);
      },
        error => this.router.navigate(['/main', { action: error }])
      );
  }

  selectRow(row) {
    this.bookService.toggleRow(row.ID);
  }

  ngOnDestroy() {
    this.changeDateSubscription.unsubscribe();
  }
}
