import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { FormComponent } from './dashboard/form/form.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MyPlanComponent } from './dashboard/my-plan/my-plan.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    FormComponent,
    MyPlanComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatIconModule,
    MatTableModule,
  ]
})
export class UserModule { }
