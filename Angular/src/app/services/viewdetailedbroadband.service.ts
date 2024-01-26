import { Injectable } from '@angular/core';
import { BroadbandPlans } from '../components/landing/viewdetailedbroadband/viewdetailedbroadband.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// const allPlans: BroadbandPlans[] = [
//   {
//     id: 1,
//     planType: 'Individual',
//     planName: 'Monthly',
//     speed: '100 Mbps',
//     description:
//       'Uninteruppted 3G Data is over and above your plan limit and can be used in 3G Network areas only',
//     price: 149,
//   },
//   {
//     id: 2,
//     planType: 'Individual',
//     planName: 'Quarterly',
//     speed: '200 Mbps',
//     description:
//       'Hotstar and OTT subscriptions,Uninteruppted 4G Data is over and above your plan limit and can be used in 4G Network areas only',
//     price: 249,
//   },
//   {
//     id: 3,
//     planType: 'Individual',
//     planName: 'Yearly',
//     speed: '350 Mbps',
//     description:
//       'Netflix+Prime Subscriptions, Uninteruppted 5G Data is over and above your plan limit and can be used in 5G Network areas only',
//     price: 399,
//   },
//   {
//     id: 4,
//     planType: 'Business',
//     planName: 'Monthly',
//     speed: '350 Mbps',
//     description: 'Single Band router Suitable for light internet usage.',
//     price: 249,
//   },
//   {
//     id: 5,
//     planType: 'Business',
//     planName: 'Quarterly',
//     speed: '650 Mbps',
//     description: 'Dual Band router Perfect for streaming and online gaming.',
//     price: 599,
//   },
//   {
//     id: 6,
//     planType: 'Business',
//     planName: 'Yearly',
//     speed: '1050 Mbps',
//     description: 'Multi Band router Ideal for multiple users and 4K streaming.',
//     price: 1199,
//   },
// ];

@Injectable({
  providedIn: 'root',
})
export class ViewdetailedbroadbandService {

  private individualUrl = 'http://localhost:3000/individualPlanTable';

  private businesssUrl = 'http://localhost:3000/businessPlanTable';

  constructor(private httpClient: HttpClient) { }

  getAllIndividualPlans(): Observable<BroadbandPlans[]> {
    return this.httpClient.get<BroadbandPlans[]>(`${this.individualUrl}`);
  }

  getAllBusinessPlans(): Observable<BroadbandPlans[]> {
    return this.httpClient.get<BroadbandPlans[]>(`${this.businesssUrl}`);
  }
  
}
