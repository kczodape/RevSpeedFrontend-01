import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Channel } from '../../../../../modules/admin/Interfaces/Channel';
import { AdminService } from '../../../../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { HindiPaymentDialogeComponent } from '../hindi-payment-dialoge/hindi-payment-dialoge.component';
import { HandelHindiAuthenticationDialogeComponent } from '../handel-hindi-authentication-dialoge/handel-hindi-authentication-dialoge.component';

@Component({
  selector: 'app-hindi-entertainment',
  templateUrl: './hindi-entertainment.component.html',
  styleUrl: './hindi-entertainment.component.scss'
})
export class HindiEntertainmentComponent implements AfterViewInit  {
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  jwtToken: string | null = sessionStorage.getItem('jwt');

  constructor(private adminService: AdminService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Channel>();
  ngAfterViewInit(){
    this.adminService.getHindiEntertainmentChannels().subscribe((channelsData : Channel[]) => {
      
      // Display the filtered channels in the table
      this.dataSource.data = channelsData;

      // Set up sorting and pagination
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(planId: number) {
    const customerIdFromSession = sessionStorage.getItem('customerId')
    console.log("customerId ", customerIdFromSession);
    sessionStorage.setItem('hindiId', planId.toString());

    if (this.jwtToken) {
      const dialogRef = this.dialog.open(HindiPaymentDialogeComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      const dialogRef = this.dialog.open(HandelHindiAuthenticationDialogeComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
}
