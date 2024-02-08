import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewdetailedbroadbandService } from '../../../../services/viewdetailedbroadband.service';
import { MatTableDataSource } from '@angular/material/table';
import { BroadbandPlans } from '../viewdetailedbroadband.component';
import { IndividualInterface } from '../../../../modules/admin/Interfaces/BroadbandInterface';
import { AdminService } from '../../../../services/admin.service';
import { BusinessPaymentDialogComponent } from './business-payment-dialog/business-payment-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HandelBusinessAuthenticationDialogeComponent } from './handel-business-authentication-dialoge/handel-business-authentication-dialoge.component';

@Component({
  selector: 'app-businessplan',
  templateUrl: './businessplan.component.html',
  styleUrl: './businessplan.component.scss'
})
export class BusinessplanComponent implements AfterViewInit{
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  jwtToken: string | null = sessionStorage.getItem('jwt');

  constructor(private adminService: AdminService, public dialog: MatDialog) { }

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

  openDialog(planId: number, days: number) {
    const customerIdFromSession = sessionStorage.getItem('customerId')
    console.log("customerId ", customerIdFromSession);
    sessionStorage.setItem('businessId', planId.toString());
    sessionStorage.setItem('durationDays', days.toString())

    if (this.jwtToken) {
      const dialogRef = this.dialog.open(BusinessPaymentDialogComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      const dialogRef = this.dialog.open(HandelBusinessAuthenticationDialogeComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
}
