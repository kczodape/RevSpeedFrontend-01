import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BroadbandPlans } from '../viewdetailedbroadband.component';
import { MatTableDataSource } from '@angular/material/table';
import { ViewdetailedbroadbandService } from '../../../../services/viewdetailedbroadband.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IndividualInterface } from '../../../../modules/admin/Interfaces/BroadbandInterface';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-individualplan',
  templateUrl: './individualplan.component.html',
  styleUrl: './individualplan.component.scss'
})
export class IndividualplanComponent implements AfterViewInit{
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  constructor(private adminService: AdminService) { }

  displayedColumns: string[] = ['id', 'duration', 'days', 'planName', 'speed', 'ottPlatform', 'price'];
  dataSource = new MatTableDataSource<IndividualInterface>();
  ottPlatforms: { id: number; ott_platform: string }[] = [];

  ngAfterViewInit() {
     // Fetch data asynchronously using the service
    this.adminService.getAllIndividualSubscriptions().subscribe((data) => {
      // Assign the data to the dataSource
      this.dataSource.data = data;

      // Set up sorting and pagination
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

     // Fetch OTT platform data
     this.adminService.getOTTPlatforms().subscribe((ottPlatforms) => {
      this.ottPlatforms = ottPlatforms;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
