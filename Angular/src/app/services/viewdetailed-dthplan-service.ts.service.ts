import { Injectable } from '@angular/core';
import { BroadbandPlans } from '../components/landing/viewdetailedbroadband/viewdetailedbroadband.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DthPlans } from '../components/landing/viewdetailed-dthplans/viewdetailed-dthplans.component';



@Injectable({
  providedIn: 'root'
})
export class ViewdetailedDthplanServiceTsService {

  private DthUrl = 'http://localhost:3000/dth';

  constructor(private httpClient: HttpClient) { }

  getAllDTHChannels(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.DthUrl}/dth`);
  }
}
