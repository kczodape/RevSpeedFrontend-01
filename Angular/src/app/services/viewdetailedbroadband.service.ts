import { Injectable } from '@angular/core';
import { BroadbandPlans } from '../components/landing/viewdetailedbroadband/viewdetailedbroadband.component';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IndividualInterface } from '../modules/admin/Interfaces/BroadbandInterface';

@Injectable({
  providedIn: 'root',
})
export class ViewdetailedbroadbandService {

  private apiUrl = 'http://localhost:3000';

  private serverApiUrl = 'http://localhost:8080/api';
  jwtToken = sessionStorage.getItem('jwt');

  constructor(private httpClient: HttpClient) { }

  getAllBusinessSubscriptions(): Observable<IndividualInterface[]> {
    console.log('Fetching business subscriptions...'+this.jwtToken);
  
    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });
  
      return this.httpClient
        .get<IndividualInterface[]>(`${this.serverApiUrl}/business/details`, { headers: headers })
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          })
        );
    } else {
      console.error('JWT token not found in session storage');
      return throwError('JWT token not found');
    }
  }
  
}
