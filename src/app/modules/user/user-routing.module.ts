import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { MyPlanComponent } from './dashboard/my-plan/my-plan.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path:'profile',
    component:UserProfileComponent
  },
  {
    path:'history',
    component:MyPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
