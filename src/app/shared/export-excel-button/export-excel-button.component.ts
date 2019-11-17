import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ExportExcelService } from '../services/export-excel.service';
import { MatSnackBar } from '@angular/material';
import { Data } from 'src/app/core/models/data.model';



@Component({
  selector: 'app-export-excel-button',
  templateUrl: './export-excel-button.component.html',
  styleUrls: ['./export-excel-button.component.scss']
})
export class ExportExcelButtonComponent implements OnInit {
  @Input() data: Data[];
  constructor(
    private _snackBar: MatSnackBar,
    private exportService: ExportExcelService,
  ) { }

  ngOnInit(): void { }

  prepareData(): Data[] {
    return this.data.map((book: Data) => {
      return {
        Title: book.Title,
        PageCount: book.PageCount,
        PublishDate: this.prepareTableDate(book.PublishDate),
        Description: book.Description,
        Excerpt: book.Excerpt,
      }
    })
  }

  prepareTableDate(date) {
    return moment(date).format('YYYY-MM-DD')
  }

  exportData(): void {
    console.log(this.data);
    this.exportService.export(this.prepareData(), 'table');
    this._snackBar.open('Экспорт данных завершен', 'info', {
      duration: 5000,
    });

  }

}
