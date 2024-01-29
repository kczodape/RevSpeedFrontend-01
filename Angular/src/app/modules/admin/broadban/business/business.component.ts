import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../../../../services/admin.service';
import { IndividualInterface } from '../../Interfaces/BroadbandInterface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss'
})
export class BusinessComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  constructor(private adminService: AdminService) { }

  displayedColumns: string[] = ['businessId', 'durationName', 'days', 'planType', 'speed', 'price'];
  dataSource = new MatTableDataSource<IndividualInterface>();

  ngAfterViewInit() {
     // Fetch data asynchronously using the service
     this.adminService.getAllBusinessSubscriptions().subscribe((data) => {
      // Assign the data to the dataSource
      console.log(data);
      
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
