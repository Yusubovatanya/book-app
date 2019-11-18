import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { BookService } from '../../services/book/book.service';
import { Data } from 'src/app/core/models/data.model';


@Component({
  selector: 'app-chart-book',
  templateUrl: './chart-book.component.html',
  styleUrls: ['./chart-book.component.scss']
})
export class ChartBookComponent implements OnInit {
  data: Data[];
  isMonthChart = true;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}], yAxes: [{ ticks: { min: 0 } }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = !true;
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];
  public chartColors = [];

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.data = this.bookService.formateChartDate();
    this.checkChart();
  }

  buildChartMonth() {
    this.barChartLabels = this.bookService.month;
    this.chartColors = this.bookService.getChartColor(this.barChartLabels);
    this.barChartData[0].data = this.bookService.prepareChartData(this.isMonthChart);
  }

  buildChartYear() {
    this.barChartLabels = this.bookService.prepareChartDate();
    this.chartColors = this.bookService.getChartColor(this.barChartLabels);
    this.barChartData[0].data = this.bookService.prepareChartData(this.isMonthChart);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public checkChart(): void {
    if (this.isMonthChart) {
      this.buildChartMonth();
    } else {
      this.buildChartYear();
    }
    this.isMonthChart = !this.isMonthChart;
  }
}
