import { Component } from '@angular/core';
import { AgChartOptions, AgCharts } from 'ag-charts-community';

@Component({
  selector: 'app-activeinactiveusergraph',
  templateUrl: './activeinactiveusergraph.component.html',
  styleUrl: './activeinactiveusergraph.component.scss',
})
export class ActiveinactiveusergraphComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      title: {
        text: "Active Subscribers",
      },
      data: [
        {
          status: "Active Subscribers",
          broadband: 140,
          dth: 16,
        },
      ],
      series: [
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'status',
          yKey: 'broadband',
          yName: 'broadband',
        },
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'status',
          yKey: 'dth',
          yName: 'dth',
        },
      ],
    };
  }
}
