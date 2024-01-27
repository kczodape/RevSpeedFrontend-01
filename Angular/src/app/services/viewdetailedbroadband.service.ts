import { Injectable } from '@angular/core';
import { BroadbandPlans } from '../components/landing/viewdetailedbroadband/viewdetailedbroadband.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
