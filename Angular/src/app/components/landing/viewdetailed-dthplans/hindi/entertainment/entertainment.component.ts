import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Channel } from '../../../../../modules/admin/Interfaces/Channel';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ViewdetailedDthplanServiceTsService } from '../../../../../services/viewdetailed-dthplan-service.ts.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.scss'
})
export class EntertainmentComponent implements AfterViewInit{

  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  constructor(private ViewDetailedService: ViewdetailedDthplanServiceTsService) {}
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Channel>();

  ngAfterViewInit(): void {
    this.ViewDetailedService.getAllDTHChannels().subscribe((dthData) => {
      // Filter only English channels in the "Entertainment" category
      const englishEntertainmentChannels = dthData
        .filter((lang) => lang.language === 'Hindi')
        .flatMap((lang) => lang.categories)
        .find(
          (category) => category.categoryName === 'Entertainment'
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


