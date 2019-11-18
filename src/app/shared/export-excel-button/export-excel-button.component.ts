import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ExportExcelService } from '../services/export-excel.service';
import { MatSnackBar } from '@angular/material';
import { Data } from 'src/app/core/models/data.model';
import { ExportService } from '../services/export.service';



@Component({
  selector: 'app-export-excel-button',
  templateUrl: './export-excel-button.component.html',
  styleUrls: ['./export-excel-button.component.scss']
})
export class ExportExcelButtonComponent implements OnInit {
  @Input() data: Data[];

  constructor(
    private _snackBar: MatSnackBar,
    private exportExcelService: ExportExcelService,
    private exportService: ExportService,
  ) { }

  ngOnInit(): void { }

  exportData(): void {
    this.exportExcelService.export(this.exportService.prepareExcelData(this.data), 'table');
    this._snackBar.open('Экспорт данных завершен', 'info', {
      duration: 5000,
    });
  }
}
