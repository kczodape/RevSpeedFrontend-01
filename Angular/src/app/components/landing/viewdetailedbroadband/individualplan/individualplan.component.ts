import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BroadbandPlans } from '../viewdetailedbroadband.component';
import { MatTableDataSource } from '@angular/material/table';
import { ViewdetailedbroadbandService } from '../../../../services/viewdetailedbroadband.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IndividualInterface } from '../../../../modules/admin/Interfaces/BroadbandInterface';
import { AdminService } from '../../../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialougeComponent } from './payment-dialouge/payment-dialouge.component';
// import { HandelAuthenticationDialougeComponent } from './handel-authentication-dialouge/handel-authentication-dialouge.component';
import { JwtService } from '../../../../services/jwt.service';
import { log } from 'console';
import { HandelAuthenticationDialougeComponent } from './handel-authentication-dialouge/handel-authentication-dialouge.component';

@Component({
  selector: 'app-individualplan',
  templateUrl: './individualplan.component.html',
  styleUrl: './individualplan.component.scss'
})
export class IndividualplanComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  jwtToken: string | null = sessionStorage.getItem('jwt');

  constructor(private adminService: AdminService, public dialog: MatDialog, private jwtService: JwtService) {

  }

  displayedColumns: string[] = ['individualId', 'durationName', 'days', 'broadbandPlansName', 'speed', 'ottPlatform', 'price'];
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

  openDialog(planId: number, days: number) {
    this.myDetails();
    const customerIdFromSession = sessionStorage.getItem('customerId')
    console.log("customerIdbbb ", customerIdFromSession);
    sessionStorage.setItem('individualId', planId.toString());
    sessionStorage.setItem('durationDays', days.toString())

    if (this.jwtToken) {
      const dialogRef = this.dialog.open(PaymentDialougeComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      const dialogRef = this.dialog.open(HandelAuthenticationDialougeComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }

  myDetails() {
    this.jwtService.myDetails().subscribe(
      (response) => {
        const customerId = response.id;
        sessionStorage.setItem('customerId', customerId.toString());
        const customerIdFromSession = sessionStorage.getItem('customerId')
        console.log("customerIdaaa ", customerIdFromSession);      }
    )
  }
}

