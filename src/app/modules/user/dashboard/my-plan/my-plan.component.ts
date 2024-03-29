import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { JwtService } from '../../../../services/jwt.service';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-plan',
  templateUrl: './my-plan.component.html',
  styleUrl: './my-plan.component.scss'
})
export class MyPlanComponent implements OnInit {

  customerHistory: any[] = [];
  isSmallScreen: boolean = false;

  constructor(private adminService: AdminService, private jwtService: JwtService, private auth: AuthService, private router: Router) { this.fetchCustomerHistory();}

  ngOnInit(): void {
    this.fetchCustomerHistory();
    this.myDetails();
  }

  fetchCustomerHistory(): void {
    const customerIdFromSession : any = sessionStorage.getItem('customerIdHistory')
        console.log("customerIdaaa ", customerIdFromSession);
    this.adminService.getCustomerHistory(customerIdFromSession).subscribe(
      (data: any[]) => {
        this.customerHistory = data;
        console.log(data);

      },
      (error: any) => {
        console.error('Error fetching customer history:', error);
      }
    );
  }

  myDetails() {
    this.jwtService.myDetails().subscribe(
      (response) => {
        console.log(response);

        const customerId = response.id;
        sessionStorage.setItem('customerIdHistory', customerId.toString());
        const customerIdFromSession = sessionStorage.getItem('customerIdHistory')
        console.log("customerIdaaa ", customerIdFromSession);
      }
    )
  }

  logout() {
    this.auth.logOut();
    this.router.navigate(['/login']);
  }
}
