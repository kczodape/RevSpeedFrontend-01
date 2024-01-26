import { Component } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-dthpiechart',
  templateUrl: './dthpiechart.component.html',
  styleUrl: './dthpiechart.component.scss'
})
export class DthpiechartComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      data: [
        { asset: 'English', amount: 1 },
        { asset: 'Hindi', amount: 2.5 },
        { asset: 'Tamil', amount: 0.5 },
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
