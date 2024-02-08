import { Injectable } from '@angular/core';
import { SubscribersInterface } from '../modules/admin/Interfaces/SubscribersInterface';
import { IndividualInterface } from '../modules/admin/Interfaces/BroadbandInterface';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Channel } from '../modules/admin/Interfaces/Channel';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:3000';
  private serverApiUrl = 'http://localhost:9898/api';
  private serverUnauthenticatedApiUrlBroadband = 'http://localhost:9898/broadband';
  private serverUnauthenticatedOttApi = 'http://localhost:9898/ott';

  // private serverApiUrl = 'http://34.70.138.168/api';
  // private serverUnauthenticatedApiUrlBroadband = 'http://34.70.138.168/broadband';
  // private serverUnauthenticatedOttApi = 'http://34.70.138.168/ott';
  jwtToken: string | null = sessionStorage.getItem('jwt');

  constructor(private httpClient: HttpClient) { }

  // getAllSubscribers(): Observable<SubscribersInterface[]> {
  //   return this.httpClient.get<SubscribersInterface[]>(`${this.apiUrl}/subscribers`);
  // }

  getAllCustomers(): Observable<SubscribersInterface[]> {
    console.log('Fetching customers...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<SubscribersInterface[]>(`${this.serverApiUrl}/allcustomers`, { headers: headers })
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

  // getAllIndividualSubscriptions(): Observable<IndividualInterface[]> {
  //   return this.httpClient.get<IndividualInterface[]>(`${this.apiUrl}/individualSubscriptions`);
  // }

  // Fetch the count of total customers
  getCountOfTotalCustomers(): Observable<number> {
    console.log('Fetching the count of total customers...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<number>(`${this.serverApiUrl}/countOfTotalCustomers`, { headers: headers })
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

  // Fetch the total revenue
  getTotalRevenue(): Observable<number> {
    console.log('Fetching total revenue...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<number>(`${this.serverApiUrl}/totalReveneu`, { headers: headers })
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

  // Function to get monthly subscribers
  getMonthlySubscribers(): Observable<any[]> {
    console.log('Fetching monthly subscribers...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/monthlySubscribers`, { headers: headers })
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

  // Function to get total revenue by broadband service type
  getTotalRevenueByServiceType(): Observable<any[]> {
    console.log('Fetching total revenue by broadband service type...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/total-revenue-by-broadband-service-type`, { headers: headers })
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

  getTotalRevenueByDTHServiceType(): Observable<any[]> {
    console.log('Fetching total revenue by DTH service type...');

    // Replace 'YOUR_JWT_TOKEN' with the logic to retrieve your JWT token

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/total-revenue-by-dth-service-type`, { headers: headers })
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          })
        );
    } else {
      console.error('JWT token not found');
      return throwError('JWT token not found');
    }
  }

  getActiveBroadbandCustomers(): Observable<number> {
    console.log('Fetching active broadband customers...');

    const headers = this.createHeaders();

    return this.httpClient
      .get<number>(`${this.serverApiUrl}/active-broadband-customers`, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('API request failed:', error);
          return throwError(error);
        })
      );
  }


  getActiveDthCustomers(): Observable<number> {
    console.log('Fetching active DTH customers...');

    const headers = this.createHeaders();

    return this.httpClient
      .get<number>(`${this.serverApiUrl}/active-dth-customers`, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('API request failed:', error);
          return throwError(error);
        })
      );
  }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`,
      'Content-Type': 'application/json',
    });
  }

  updateCustomerRole(customerId: number, newRole: string): Observable<any> {
    if (!this.jwtToken) {
      // Handle the case when the JWT token is not available
      console.error('JWT token not available');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`,
      'Content-Type': 'application/json',
    });
    const url = `${this.serverApiUrl}/customers/${customerId}/update-role/${newRole}`;

    console.log(headers);

    // const body = { newRole };

    return this.httpClient.put(url, {}, { headers });
  }

  // Fetch individual plans
  getIndividualPlans(): Observable<IndividualInterface[]> {
    console.log('Fetching individual plans...');

    return this.httpClient
      .get<IndividualInterface[]>(`${this.serverUnauthenticatedApiUrlBroadband}/individual/details`)
      .pipe(
        catchError((error: any) => {
          console.error('API request failed:', error);
          return throwError(error);
        })
      );
  }


  // Fetch OTT platforms
  getOTTPlatformsMapping(): Observable<{ durationName: string; ottPlatformsNameMap: Record<string, string> }[]> {
    console.log('Fetching OTT platforms mapping...');

    return this.httpClient
      .get<{ durationName: string; ottPlatformsNameMap: Record<string, string> }[]>(`${this.serverUnauthenticatedOttApi}/durationOttMappings/all`)
      .pipe(
        catchError((error: any) => {
          console.error('API request failed:', error);
          return throwError(error);
        })
      );
  }

  // New method to fetch OTT platform data
  // getOTTPlatforms(): Observable<{ id: number; ott_platform: string }[]> {
  //   return this.httpClient.get<{ id: number; ott_platform: string }[]>(`${this.apiUrl}/ott`);
  // }

  // getAllBusinessSubscriptions(): Observable<IndividualInterface[]> {
  //   return this.httpClient.get<IndividualInterface[]>(`${this.apiUrl}/businessSubscriptions`);
  // }

  getAllBusinessSubscriptions(): Observable<IndividualInterface[]> {
    console.log('Fetching business subscriptions...');

    return this.httpClient
      .get<IndividualInterface[]>(`${this.serverUnauthenticatedApiUrlBroadband}/business/details`)
      .pipe(
        catchError((error: any) => {
          console.error('API request failed:', error);
          return throwError(error);
        })
      );
  }

  // getAllDTHChannels(): Observable<any[]> {
  //   return this.httpClient.get<any[]>(`${this.apiUrl}/dth`);
  // }

  getEnglishEntertainmentChannels(): Observable<Channel[]> {
    console.log('Fetching English entertainment channels...');

    return this.httpClient
      .get<any[]>(`${this.serverUnauthenticatedApiUrlBroadband}/channels/english/entertainment`)
      .pipe(
        catchError((error: any) => {
          console.error('API request failed:', error);
          return throwError(error);
        }),
        map((channelsData: any[]) => {
          // Extract only the "price" property and add an ID
          return channelsData.map((channel) => ({
            id: channel.channelId,  // Generate a simple ID based on the array index
            name: channel.channelName,  // Include the channel name if needed
            price: channel.price
          }));
        })
      );
  }


  getEnglishSportChannels(): Observable<Channel[]> {
    console.log('Fetching English sport channels...');

    return this.httpClient
      .get<any[]>(`${this.serverUnauthenticatedApiUrlBroadband}/channels/english/sport`)
      .pipe(
        catchError((error: any) => {
          console.error('API request failed:', error);
          return throwError(error);
        }),
        map((channelsData: any[]) => {
          // Extract only the "price" property and add an ID
          return channelsData.map((channel) => ({
            id: channel.channelId,  // Generate a simple ID based on the array index
            name: channel.channelName,  // Include the channel name if needed
            price: channel.price
          }));
        })
      );
  }

  getEnglishNewsChannels(): Observable<Channel[]> {
    console.log('Fetching English news channels...');
    return this.httpClient
      .get<any[]>(`${this.serverUnauthenticatedApiUrlBroadband}/channels/english/news`)
      .pipe(
        catchError((error: any) => {
          console.error('API request failed:', error);
          return throwError(error);
        }),
        map((channelsData: any[]) => {
          // Extract only the "price" property and add an ID
          return channelsData.map((channel) => ({
            id: channel.channelId,  // Generate a simple ID based on the array index
            name: channel.channelName,  // Include the channel name if needed
            price: channel.price
          }));
        })
      );
  }

  getHindiEntertainmentChannels(): Observable<Channel[]> {
    
    return this.httpClient
    .get<any[]>(`${this.serverUnauthenticatedApiUrlBroadband}/channels/hindi/entertainment`)
    .pipe(
      catchError((error: any) => {
        console.error('API request failed:', error);
        return throwError(error);
      }),
      map((channelsData: any[]) => {
        // Extract only the "price" property and add an ID
        return channelsData.map((channel) => ({
          id: channel.channelId,  // Generate a simple ID based on the array index
          name: channel.channelName,  // Include the channel name if needed
          price: channel.price
        }));
      })
    );
  }


  getHindiSportChannels(): Observable<Channel[]> {
    console.log('Fetching Hindi sport channels...');
    return this.httpClient
    .get<any[]>(`${this.serverUnauthenticatedApiUrlBroadband}/channels/hindi/sport`)
    .pipe(
      catchError((error: any) => {
        console.error('API request failed:', error);
        return throwError(error);
      }),
      map((channelsData: any[]) => {
        // Extract only the "price" property and add an ID
        return channelsData.map((channel) => ({
          id: channel.channelId,  // Generate a simple ID based on the array index
          name: channel.channelName,  // Include the channel name if needed
          price: channel.price
        }));
      })
    );
  }

  getHindiNewsChannels(): Observable<Channel[]> {
    console.log('Fetching Hindi news channels...');

    return this.httpClient
    .get<any[]>(`${this.serverUnauthenticatedApiUrlBroadband}/channels/hindi/news`)
    .pipe(
      catchError((error: any) => {
        console.error('API request failed:', error);
        return throwError(error);
      }),
      map((channelsData: any[]) => {
        // Extract only the "price" property and add an ID
        return channelsData.map((channel) => ({
          id: channel.channelId,  // Generate a simple ID based on the array index
          name: channel.channelName,  // Include the channel name if needed
          price: channel.price
        }));
      })
    );
  }



  getTamilEntertainmentChannels(): Observable<Channel[]> {
    console.log('Fetching Tamil entertainment channels...');

    return this.httpClient
        .get<any[]>(`${this.serverUnauthenticatedApiUrlBroadband}/channels/tamil/entertainment`)
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          }),
          map((channelsData: any[]) => {
            // Extract only the "price" property and add an ID
            return channelsData.map((channel) => ({
              id: channel.channelId,  // Generate a simple ID based on the array index
              name: channel.channelName,  // Include the channel name if needed
              price: channel.price
            }));
          })
        );
  }


  getTamilSportChannels(): Observable<Channel[]> {
    console.log('Fetching Tamil sport channels...');

    
    return this.httpClient
    .get<any[]>(`${this.serverUnauthenticatedApiUrlBroadband}/channels/tamil/sport`)
    .pipe(
      catchError((error: any) => {
        console.error('API request failed:', error);
        return throwError(error);
      }),
      map((channelsData: any[]) => {
        // Extract only the "price" property and add an ID
        return channelsData.map((channel) => ({
          id: channel.channelId,  // Generate a simple ID based on the array index
          name: channel.channelName,  // Include the channel name if needed
          price: channel.price
        }));
      })
    );
  }

  getTamilNewsChannels(): Observable<Channel[]> {
    console.log('Fetching Tamil news channels...');

    return this.httpClient
        .get<any[]>(`${this.serverUnauthenticatedApiUrlBroadband}/channels/tamil/news`)
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          }),
          map((channelsData: any[]) => {
            // Extract only the "price" property and add an ID
            return channelsData.map((channel) => ({
              id: channel.channelId,  // Generate a simple ID based on the array index
              name: channel.channelName,  // Include the channel name if needed
              price: channel.price
            }));
          })
        );
  }

  createCustomerServiceLinkIndividual(customerId: number, individualId: number, durationDays: number): Observable<any> {
    const customerStatus = true;

    const requestBody = {
      customerId,
      individualId,
      durationDays,
      customerStatus
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${this.serverApiUrl}/individual/create`, requestBody, { headers }).pipe(
      catchError((error: any) => {
        console.error('API request failed www:', error);
        return throwError(error);
      })
    );
  }

  createCustomerServiceLinkBusiness(customerId: number, businessId: number, durationDays: number): Observable<any> {
    const customerStatus = true;

    const requestBody = {
      customerId,
      businessId,
      durationDays,
      customerStatus
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${this.serverApiUrl}/business/create`, requestBody, { headers }).pipe(
      catchError((error: any) => {
        console.error('API request failed:', error);
        return throwError(error);
      })
    );
  }

  createCustomerServiceLinkEnglish(customerId: number, englishId: number): Observable<any> {
    const customerStatus = true;
    const durationDays = 28;
    const requestBody = {
      customerId,
      englishId,
      durationDays,
      customerStatus
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${this.serverApiUrl}/english/create`, requestBody, { headers }).pipe(
      catchError((error: any) => {
        console.error('API request failed:', error);
        return throwError(error);
      })
    );
  }

  createCustomerServiceLinkHindi(customerId: number, hindiId: number): Observable<any> {
    const customerStatus = true;
    const durationDays = 28;
    const requestBody = {
      customerId,
      hindiId,
      durationDays,
      customerStatus
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${this.serverApiUrl}/hindi/create`, requestBody, { headers }).pipe(
      catchError((error: any) => {
        console.error('API request failed:', error);
        return throwError(error);
      })
    );
  }

  createCustomerServiceLinkTamil(customerId: number, tamilId: number): Observable<any> {
    const customerStatus = true;
    const durationDays = 28;
    const requestBody = {
      customerId,
      tamilId,
      durationDays,
      customerStatus
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${this.serverApiUrl}/tamil/create`, requestBody, { headers }).pipe(
      catchError((error: any) => {
        console.error('API request failed:', error);
        return throwError(error);
      })
    );
  }

  updateCustomerStatusBySubscriptionEndDate(cid: number): Observable<string> {
    const url = `${this.serverApiUrl}/validity/${cid}`;
    const headers = this.jwtToken ? new HttpHeaders({
      'Authorization': `Bearer ${this.jwtToken}`
    }) : undefined;
 
    return this.httpClient.put<string>(url, {}, { headers });
  }
  getCustomerHistory(customerId: number): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.get<any[]>(`${this.serverApiUrl}/history/${customerId}`, { headers }).pipe(
      catchError((error: any) => {
        console.error('API request failed:', error);
        return throwError(error);
      })
    );
  }
}
