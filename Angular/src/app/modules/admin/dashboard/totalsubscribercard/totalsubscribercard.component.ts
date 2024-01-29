import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-totalsubscribercard',
  templateUrl: './totalsubscribercard.component.html',
  styleUrl: './totalsubscribercard.component.scss'
})
export class TotalsubscribercardComponent implements OnInit {
  
  totalCustomersCount: number | any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchTotalCustomersCount();
  }

  fetchTotalCustomersCount() {
    this.adminService.getCountOfTotalCustomers().subscribe(
      count => {
        this.totalCustomersCount = count;
      },
      error => {
        console.error('Error fetching total customers count:', error);
      }
    );
  }
}
