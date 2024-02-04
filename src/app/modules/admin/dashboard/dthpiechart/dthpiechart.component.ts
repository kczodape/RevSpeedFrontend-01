import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { catchError, throwError } from 'rxjs';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-dthpiechart',
  templateUrl: './dthpiechart.component.html',
  styleUrl: './dthpiechart.component.scss'
})
export class DthpiechartComponent implements OnInit {
  public options: AgChartOptions | any;

  constructor(private dthRevenueService: AdminService) {
    this.options = {
      data: [],
      title: {
        text: 'DTH Service Revenue',
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

  ngOnInit(): void {
    this.fetchTotalRevenueByDTHServiceType();
  }

  fetchTotalRevenueByDTHServiceType(): void {
    this.dthRevenueService.getTotalRevenueByDTHServiceType().subscribe(
      (data: any[]) => {
        console.log('Total Revenue Data:', data);

        // Convert API response to the format expected by the chart
        const chartData = Object.keys(data[0]).map((asset) => ({
          asset,
          amount: data[0][asset],
        }));

        console.log('Chart Data:', chartData);

        // Update chartOptions with the modified data
        this.options.data = chartData;

        // After data is fetched, update the chart
        this.updateChartWithData();
      },
      (error) => {
        console.error('Error fetching total revenue by DTH service type:', error);
      }
    );
  }

  private updateChartWithData(): void {
    // Check if ag-charts-angular component is available and data is present
    if (this.options.api && this.options.data.length > 0) {
      this.options.api.updateData(this.options.data);
    }
  }
}