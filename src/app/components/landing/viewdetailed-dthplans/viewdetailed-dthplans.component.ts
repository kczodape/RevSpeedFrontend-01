import { Component } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';

import { ViewdetailedbroadbandService } from '../../../services/viewdetailedbroadband.service';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface DthPlans {
  id:number;
  channel_catagory: string;
  channel_name: string;
  price: number;
}


@Component({
  selector: 'app-viewdetailed-dthplans',
  templateUrl: './viewdetailed-dthplans.component.html',
  styleUrl: './viewdetailed-dthplans.component.scss'
})
export class ViewdetailedDthplansComponent {

}
