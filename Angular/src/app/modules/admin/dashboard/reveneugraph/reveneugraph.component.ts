import { Component } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-reveneugraph',
  templateUrl: './reveneugraph.component.html',
  styleUrl: './reveneugraph.component.scss',
})
export class ReveneugraphComponent {
  // Chart Options
  public chartOptions: AgChartOptions;
  constructor() {
    this.chartOptions = {
      title: {
        text: 'Monthly Subscriber',
      },
      data: [
        { month: 'Jan', totalSubscriber: 25 },
        { month: 'Mar', totalSubscriber: 66 },
        { month: 'May', totalSubscriber: 18 },
        { month: 'Jul', totalSubscriber: 90 },
        { month: 'Sep', totalSubscriber: 64 },
        { month: 'Nov', totalSubscriber: 88 },
      ],
      // Series: Defines which chart type and data to use
      series: [{ type: 'bar', xKey: 'month', yKey: 'totalSubscriber' }],
    };
  }
}
