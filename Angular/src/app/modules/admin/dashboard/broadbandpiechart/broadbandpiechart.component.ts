import { Component } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-broadbandpiechart',
  templateUrl: './broadbandpiechart.component.html',
  styleUrl: './broadbandpiechart.component.scss',
})
export class BroadbandpiechartComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      data: [
        { asset: 'Individual', amount: 3 },
        { asset: 'Business', amount: 4 },
      ],
      title: {
        text: 'Broadband Service Reveneu',
      },
      series: [
        {
          type: 'pie',
          calloutLabelKey: 'asset',
          angleKey: 'amount',
          innerRadiusRatio: 0.7,
        },
      ],
    };
  }
}
