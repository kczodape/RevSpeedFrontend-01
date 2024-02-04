import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-totalreveneucard',
  templateUrl: './totalreveneucard.component.html',
  styleUrl: './totalreveneucard.component.scss'
})
export class TotalreveneucardComponent implements OnInit {
  
  totalRevenue: number | any;

  // exchangeRate = 0.012;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchTotalRevenue();
  }

  fetchTotalRevenue() {
    this.adminService.getTotalRevenue().subscribe(
      revenue => {
        this.totalRevenue = revenue;
      },
      error => {
        console.error('Error fetching total revenue:', error);
      }
    );
  }


}
