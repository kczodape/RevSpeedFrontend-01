import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmupdatedialogComponent } from './confirmupdatedialog/confirmupdatedialog.component';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrl: './subscribers.component.scss',
})
export class SubscribersComponent implements AfterViewInit {
  @ViewChild(MatSort) sort = {} as MatSort;
  @ViewChild(MatPaginator) paginator = {} as MatPaginator;

  constructor(private adminService: AdminService, public dialog: MatDialog) { }

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phoneNumber',
    'address',
    'role',
    'actions',
  ];
  dataSource = new MatTableDataSource();

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    // Fetch data asynchronously using the service
    this.adminService.getAllCustomers().subscribe((data) => {
      // Assign the data to the dataSource
      this.dataSource.data = data;
      console.log('Data received:', data);
      console.log('Hii');
      // Set up sorting and pagination
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      (error) => {
        console.error('Error fetching customers:', error);
      });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, customerId: number) {
    console.log('Selected ID:', customerId);

    // Store the id in sessionStorage
    sessionStorage.setItem('id', customerId.toString());

    const dialogRef = this.dialog.open(ConfirmupdatedialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((result) => { });
  }

  applyFilter(event: Event) {
    // Applies filtering to all columns ('id', 'name', 'email', 'phoneNumber', 'address', 'role')
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
