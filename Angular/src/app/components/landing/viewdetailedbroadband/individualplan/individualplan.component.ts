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

  displayedColumns: string[] = ['id', 'durationName', 'days', 'broadbandPlansName', 'speed', 'ottPlatform', 'price'];
  dataSource = new MatTableDataSource<IndividualInterface>();
  // ottPlatforms: { id: number; ott_platform: string }[] = [];

  ottPlatformsMapping: { durationName: string; ottPlatformsNameMap: Record<string, string> }[] = [];

  ngAfterViewInit() {
    // Fetch individual plans
    this.adminService.getIndividualPlans().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    // Fetch OTT platform data
    this.adminService.getOTTPlatformsMapping().subscribe((ottPlatformsMapping) => {
      this.ottPlatformsMapping = ottPlatformsMapping;
    });
  }

  // Add a method to get OTT platforms based on duration
  getOttPlatformsForDuration(duration: string): string[] {
    const durationMapping = this.ottPlatformsMapping.find(mapping => mapping.durationName === duration);

    if (durationMapping) {
      return Object.values(durationMapping.ottPlatformsNameMap);
    }

    return [];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
