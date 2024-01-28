import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../../../../services/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { IndividualInterface } from '../../Interfaces/BroadbandInterface';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss'
})
export class IndividualComponent implements AfterViewInit {
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
