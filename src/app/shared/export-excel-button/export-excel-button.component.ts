import { Component, OnInit } from '@angular/core';
import { ExportExcelService } from '../services/export-excel.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-export-excel-button',
  templateUrl: './export-excel-button.component.html',
  styleUrls: ['./export-excel-button.component.scss']
})
export class ExportExcelButtonComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private exportService: ExportExcelService,
  ) { }

  ngOnInit(): void { }

  prepareDataTable() {
    

    return ;
  }

  exportData(): void {
    this.exportService.export(this.prepareDataTable(), 'table');
    this._snackBar.open('Экспорт данных завершен', 'info', {
      duration: 5000,
    });
   
  }

}
