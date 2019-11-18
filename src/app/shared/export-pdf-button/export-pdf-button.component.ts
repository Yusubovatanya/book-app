import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Data } from 'src/app/core/models/data.model';
import { ExportService } from '../services/export.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-export-pdf-button',
  templateUrl: './export-pdf-button.component.html',
  styleUrls: ['./export-pdf-button.component.scss']
})
export class ExportPdfButtonComponent implements OnInit {
  @Input() data: Data[];
  constructor(
    private exportService: ExportService,
  ) { }

  ngOnInit() {

  }

  generatePdf() {
    const documentDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines',
          style: ['header', 'anotherStyle'],
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['13%', '12%', '15%', '20%', '40%'],
            body: this.exportService.preparePdfData(this.data),
          }
        }
      ],
      styles: {
        header: {
          bold: true,
          alignment: 'center'
        },
        anotherStyle: {
          fontSize: 10,
          // alignment: 'left'
        }
      }
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  prepareTableDate(date) {
    return moment(date).format('YYYY-MM-DD')
  }
}

