
import { Component, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-broadbandpiechart',
  templateUrl: './broadbandpiechart.component.html',
  styleUrl: './broadbandpiechart.component.scss',
})
export class BroadbandpiechartComponent  implements OnInit {
  // Chart Options
  public options: AgChartOptions | any;
  totalRevenueData: any[] = [];

  constructor(private adminService: AdminService) {
    this.options = {
      data: [],
      title: {
        text: 'Broadband Service Revenue',
      },
      series: [
        {
          type: 'pie',
          calloutLabelKey: 'serviceType',
          angleKey: 'totalRevenue',
          innerRadiusRatio: 0.7,
        },
      ],
    };
  }

  ngOnInit(): void {
    this.fetchTotalRevenueByServiceType();
  }

  fetchTotalRevenueByServiceType(): void {
    this.adminService.getTotalRevenueByServiceType().subscribe(
      (data: any[]) => {
        this.totalRevenueData = data;
        console.log('Total Revenue Data:', this.totalRevenueData);

        // Convert API response to the format expected by the chart
        const chartData = this.totalRevenueData.map((item) => ({
          serviceType: item.serviceType,
          totalRevenue: item.totalRevenue,
        }));

        console.log('Chart Data:', chartData);

        // Update chartOptions with the modified data
        this.options.data = chartData;

        // After data is fetched, update the chart
        this.updateChartWithData();
      },
      (error) => {
        console.error('Error fetching total revenue by service type:', error);
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