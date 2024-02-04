import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../../../../../services/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { Channel } from '../../../Interfaces/Channel';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.scss',
})
export class EntertainmentComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  constructor(private adminService: AdminService) {}

  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Channel>();

  ngAfterViewInit() {
    this.adminService.getEnglishEntertainmentChannels().subscribe((channelsData : Channel[]) => {
      console.log(channelsData);
      
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
