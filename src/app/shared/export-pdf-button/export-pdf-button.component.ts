import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Data } from 'src/app/core/models/data.model';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-export-pdf-button',
  templateUrl: './export-pdf-button.component.html',
  styleUrls: ['./export-pdf-button.component.scss']
})
export class ExportPdfButtonComponent implements OnInit {
  @Input() data: Data[];
  constructor() { }

  ngOnInit() {

  }

  generatePdf() {
    const documentDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines',
          style: [ 'header', 'anotherStyle' ],
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['13%', '12%', '15%', '20%', '40%'],
            body: this.prepareData(),
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

  prepareData() {
    let arr = [];
    arr.push(['Title', 'PageCount', 'PublishDate', 'Description', 'Excerpt']);
    this.data.forEach((book: Data) => {
      let part = [book.Title, book.PageCount, this.prepareTableDate(book.PublishDate), book.Description, book.Excerpt];
      arr.push(part);
    })
    return arr;
  }


  prepareTableDate(date) {
    return moment(date).format('YYYY-MM-DD')
  }
}
