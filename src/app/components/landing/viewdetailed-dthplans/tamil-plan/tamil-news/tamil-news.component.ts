import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Channel } from '../../../../../modules/admin/Interfaces/Channel';
import { AdminService } from '../../../../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { HandelTamilAuthenticationDialogeComponent } from '../handel-tamil-authentication-dialoge/handel-tamil-authentication-dialoge.component';
import { TamilPaymentDialogeComponent } from '../tamil-payment-dialoge/tamil-payment-dialoge.component';

@Component({
  selector: 'app-tamil-news',
  templateUrl: './tamil-news.component.html',
  styleUrl: './tamil-news.component.scss'
})
export class TamilNewsComponent implements AfterViewInit {

  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  jwtToken: string | null = sessionStorage.getItem('jwt');

  constructor(private adminService: AdminService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Channel>();
  ngAfterViewInit(){
    this.adminService.getTamilNewsChannels().subscribe((channelsData : Channel[]) => {
      
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
    sessionStorage.setItem('tamilId', planId.toString());

    if (this.jwtToken) {
      const dialogRef = this.dialog.open(TamilPaymentDialogeComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      const dialogRef = this.dialog.open(HandelTamilAuthenticationDialogeComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
}
