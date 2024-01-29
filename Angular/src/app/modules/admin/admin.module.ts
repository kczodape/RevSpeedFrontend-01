import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BroadbanComponent } from './broadban/broadban.component';
import { DthComponent } from './dth/dth.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { ReveneugraphComponent } from './dashboard/reveneugraph/reveneugraph.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { TotalsubscribercardComponent } from './dashboard/totalsubscribercard/totalsubscribercard.component';
import { TotalreveneucardComponent } from './dashboard/totalreveneucard/totalreveneucard.component';
import { BroadbandpiechartComponent } from './dashboard/broadbandpiechart/broadbandpiechart.component';
import { DthpiechartComponent } from './dashboard/dthpiechart/dthpiechart.component';
import {MatDialogModule} from '@angular/material/dialog';


import { ActiveinactiveusergraphComponent } from './dashboard/activeinactiveusergraph/activeinactiveusergraph.component';
import { MatTableModule } from '@angular/material/table'; 
import { MatSortModule } from '@angular/material/sort'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { ConfirmupdatedialogComponent } from './subscribers/confirmupdatedialog/confirmupdatedialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { IndividualComponent } from './broadban/individual/individual.component';
import { BusinessComponent } from './broadban/business/business.component';
import { HttpClientModule } from '@angular/common/http';
import { EnglishComponent } from './dth/english/english.component';
import { HindiComponent } from './dth/hindi/hindi.component';
import { TamilComponent } from './dth/tamil/tamil.component';
import { EntertainmentComponent } from './dth/english/entertainment/entertainment.component';
import { SportsComponent } from './dth/english/sports/sports.component';
import { NewsComponent } from './dth/english/news/news.component';
import { HindientertainmentComponent } from './dth/hindi/hindientertainment/hindientertainment.component';
import { HindisportsComponent } from './dth/hindi/hindisports/hindisports.component';
import { HindinewsComponent } from './dth/hindi/hindinews/hindinews.component';
import { TamilentertainmentComponent } from './dth/tamil/tamilentertainment/tamilentertainment.component';
import { TamilsportsComponent } from './dth/tamil/tamilsports/tamilsports.component';
import { TamilnewsComponent } from './dth/tamil/tamilnews/tamilnews.component';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    BroadbanComponent,
    DthComponent,
    SubscribersComponent,
    ReveneugraphComponent,
    TotalsubscribercardComponent,
    TotalreveneucardComponent,
    BroadbandpiechartComponent,
    DthpiechartComponent,
    ActiveinactiveusergraphComponent,
    ConfirmupdatedialogComponent,
    IndividualComponent,
    BusinessComponent,
    EnglishComponent,
    HindiComponent,
    TamilComponent,
    EntertainmentComponent,
    SportsComponent,
    NewsComponent,
    HindientertainmentComponent,
    HindisportsComponent,
    HindinewsComponent,
    TamilentertainmentComponent,
    TamilsportsComponent,
    TamilnewsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AgChartsAngularModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    HttpClientModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
  ]
})
export class AdminModule { }
