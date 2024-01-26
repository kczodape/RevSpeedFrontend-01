import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewdetailedbroadbandService } from '../../../../services/viewdetailedbroadband.service';
import { MatTableDataSource } from '@angular/material/table';
import { BroadbandPlans } from '../viewdetailedbroadband.component';

@Component({
  selector: 'app-businessplan',
  templateUrl: './businessplan.component.html',
  styleUrl: './businessplan.component.scss'
})
export class BusinessplanComponent implements AfterViewInit{
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  constructor(private viewPlanService: ViewdetailedbroadbandService) { }

  displayedColumns: string[] = ['id', 'planType', 'planName', 'speed', 'description', 'price'];
  dataSource = new MatTableDataSource<BroadbandPlans>();

  ngAfterViewInit() {
     // Fetch data asynchronously using the service
     this.viewPlanService.getAllBusinessPlans().subscribe((data) => {
      // Assign the data to the dataSource
      this.dataSource.data = data;

      // Set up sorting and pagination
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
