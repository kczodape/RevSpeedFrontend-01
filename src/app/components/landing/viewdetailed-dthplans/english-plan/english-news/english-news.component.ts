import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Channel } from '../../../../../modules/admin/Interfaces/Channel';
import { AdminService } from '../../../../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { EnglishPaymentDialogeComponent } from '../english-payment-dialoge/english-payment-dialoge.component';
import { HandelEnglishAuthenticationDialogeComponent } from '../handel-english-authentication-dialoge/handel-english-authentication-dialoge.component';

@Component({
  selector: 'app-english-news',
  templateUrl: './english-news.component.html',
  styleUrl: './english-news.component.scss'
})
export class EnglishNewsComponent implements AfterViewInit{
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  jwtToken: string | null = sessionStorage.getItem('jwt');

  constructor(private adminService: AdminService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Channel>();
  ngAfterViewInit(): void {
    this.adminService.getEnglishNewsChannels().subscribe((channelsData : Channel[]) => {
      console.log("im working");
      
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
    sessionStorage.setItem('englishId', planId.toString());

    if (this.jwtToken) {
      const dialogRef = this.dialog.open(EnglishPaymentDialogeComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      const dialogRef = this.dialog.open(HandelEnglishAuthenticationDialogeComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }

}
