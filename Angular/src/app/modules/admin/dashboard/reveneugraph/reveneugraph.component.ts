import { Component } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-reveneugraph',
  templateUrl: './reveneugraph.component.html',
  styleUrl: './reveneugraph.component.scss',
})
export class ReveneugraphComponent {
 // Chart Options
 public chartOptions: AgChartOptions = {};

 constructor(private adminService: AdminService) {}

 ngOnInit(): void {
   this.fetchMonthlySubscribers();
 }

 fetchMonthlySubscribers(): void {
   this.adminService.getMonthlySubscribers().subscribe(
     (data: any[]) => {
       console.log('Monthly Subscribers Data:', data);

       // Convert API response to the format expected by the chart
       const chartData = data.map((item) => ({
         month: item.month,
         totalSubscriber: item.totalSubscribers,
       }));

       // Sort chartData based on months
       chartData.sort((a, b) => {
         const monthsOrder = [
           'January', 'February', 'March', 'April', 'May', 'June',
           'July', 'August', 'September', 'October', 'November', 'December'
         ];
         return monthsOrder.indexOf(a.month) - monthsOrder.indexOf(b.month);
       });

       // Update chartOptions with the modified data
       this.chartOptions = {
         title: {
           text: 'Monthly Subscriber',
         },
         data: chartData,
         // Series: Defines which chart type and data to use
         series: [{ type: 'bar', xKey: 'month', yKey: 'totalSubscriber' }],
       };
     },
     (error) => {
       console.error('Error fetching monthly subscribers:', error);
     }
   );
 }
}
