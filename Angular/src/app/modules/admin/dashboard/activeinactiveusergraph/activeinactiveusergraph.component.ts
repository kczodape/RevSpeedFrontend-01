import { AfterViewInit, Component } from '@angular/core';
import { AgChartOptions, AgCharts } from 'ag-charts-community';
import { AdminService } from '../../../../services/admin.service';
import { Subscription, forkJoin } from 'rxjs';
import { log } from 'console';

@Component({
  selector: 'app-activeinactiveusergraph',
  templateUrl: './activeinactiveusergraph.component.html',
  styleUrl: './activeinactiveusergraph.component.scss',
})
export class ActiveinactiveusergraphComponent implements AfterViewInit {
  private dataSubscription: Subscription | any;
  options: AgChartOptions | any;
  activeBroadband: number = 0;
  activeDth: number = 0;

  constructor(private adminService: AdminService) {
    this.options = {
      title: {
        text: 'Active Subscribers',
      },
      data: [
        {
          status: 'Active Subscribers',
          broadband: this.activeBroadband,
          dth: this.activeDth,
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

  ngAfterViewInit(): void {
    this.fetchActiveCustomersData();
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  private fetchActiveCustomersData(): void {
    const activeBroadbandObservable = this.adminService.getActiveBroadbandCustomers();
    const activeDthObservable = this.adminService.getActiveDthCustomers();

    this.dataSubscription = forkJoin([activeBroadbandObservable, activeDthObservable]).subscribe(
      (data: [number, number]) => {
        if (data && data.length === 2) {
          const [activeBroadband, activeDth] = data;
          // Print data to the console
          console.log('Active Broadband Customers:', activeBroadband);
          console.log('Active DTH Customers:', activeDth);
          // Update the properties
          this.activeBroadband = activeBroadband;
          this.activeDth = activeDth;
          // Update the options.data array
          this.options.data = [
            {
              status: 'Active Subscribers',
              broadband: this.activeBroadband,
              dth: this.activeDth,
            },
          ];

          // After updating data, update the chart
          this.updateChartWithData();
        }
      },
      (error) => {
        console.error('Error fetching active customers data:', error);
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
