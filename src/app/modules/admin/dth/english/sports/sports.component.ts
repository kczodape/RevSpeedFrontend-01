import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../../../../services/admin.service';
import { Channel } from '../../../Interfaces/Channel';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.scss'
})
export class SportsComponent implements AfterViewInit {
 
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  constructor(private adminService: AdminService) {}

  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Channel>();

  ngAfterViewInit() {
    this.adminService.getEnglishSportChannels().subscribe((channelsData : Channel[]) => {
      
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
}
