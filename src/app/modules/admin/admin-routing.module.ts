import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BroadbanComponent } from './broadban/broadban.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DthComponent } from './dth/dth.component';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'broadband',
        component: BroadbanComponent,
      },
      {
        path: 'dth',
        component: DthComponent,
      },
      {
        path: 'subscribers',
        component: SubscribersComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
