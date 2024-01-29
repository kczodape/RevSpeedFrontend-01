import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Channel } from '../../../../../modules/admin/Interfaces/Channel';
import { AdminService } from '../../../../../services/admin.service';

@Component({
  selector: 'app-tamil-entertainment',
  templateUrl: './tamil-entertainment.component.html',
  styleUrl: './tamil-entertainment.component.scss'
})
export class TamilEntertainmentComponent implements AfterViewInit {

  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  constructor(private adminService: AdminService) {}

  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Channel>();

  ngAfterViewInit() {
    this.adminService.getEnglishEntertainmentChannels().subscribe((channelsData : Channel[]) => {
      
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