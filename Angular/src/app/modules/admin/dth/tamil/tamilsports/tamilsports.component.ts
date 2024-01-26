import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../../../../services/admin.service';
import { Channel } from '../../../Interfaces/Channel';

@Component({
  selector: 'app-tamilsports',
  templateUrl: './tamilsports.component.html',
  styleUrl: './tamilsports.component.scss',
})
export class TamilsportsComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  constructor(private adminService: AdminService) {}

  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Channel>();

  ngAfterViewInit() {
    this.adminService.getAllDTHChannels().subscribe((dthData) => {
      // Filter only English channels in the "Entertainment" category
      const englishEntertainmentChannels = dthData
        .filter((lang) => lang.language === 'Tamil')
        .flatMap((lang) => lang.categories)
        .find(
          (category) => category.categoryName === 'Sports'
        )?.channels;

      // Map the channels to a format compatible with MatTableDataSource
      const channelsData: Channel[] =
        englishEntertainmentChannels?.map(
          (channel: { id: any; name: any; price: any }) => ({
            id: channel.id,
            name: channel.name,
            price: channel.price,
          })
        ) || [];

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
