import { Component } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-english-payment-dialoge',
  templateUrl: './english-payment-dialoge.component.html',
  styleUrl: './english-payment-dialoge.component.scss'
})
export class EnglishPaymentDialogeComponent {

  constructor(private adminService : AdminService, private router : Router){}
  buy() { 
    const customerId = sessionStorage.getItem('customerId'); 
    const englishId = sessionStorage.getItem('englishId');

    console.log(customerId);
    console.log(englishId);
    
    this.adminService.createCustomerServiceLinkEnglish(Number(customerId), Number(englishId)).subscribe(
      (response: any) => {
        // Handle success response, if needed
        this.router.navigateByUrl("/viewdetailedplan")
        console.log('Post request successful:', response);
      },
      (error: any) => {
        this.router.navigateByUrl("/viewdetailedplan")
        console.error('Error in xyz post request:', error);
        // Handle error response, if needed
      }
    );
    
  }

}
