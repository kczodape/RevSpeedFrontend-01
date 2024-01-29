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
  private serverApiUrl = 'http://localhost:8080/api';
  private serverUnauthenticatedApiUrlBroadband = 'http://localhost:8080/broadband';
  private serverUnauthenticatedOttApi = 'http://localhost:8080/ott';
  jwtToken : string | null = sessionStorage.getItem('jwt');

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

  // Fetch individual plans
  getIndividualPlans(): Observable<IndividualInterface[]> {
    console.log('Fetching individual plans...');
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.httpClient
      .get<IndividualInterface[]>(`${this.serverUnauthenticatedApiUrlBroadband}/individual/details`, {
        headers: headers,
      })
      .pipe(
        catchError((error: any) => {
          console.error('API request failed:', error);
          return throwError(error);
        })
      );
  }
  
  getOTTPlatformsMapping(): Observable<{ durationName: string; ottPlatformsNameMap: Record<string, string> }[]> {
    console.log('Fetching OTT platforms mapping...');
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.httpClient
      .get<{ durationName: string; ottPlatformsNameMap: Record<string, string> }[]>(`${this.serverUnauthenticatedOttApi}/durationOttMappings/all`, {
        headers: headers,
      })
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
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.httpClient
      .get<IndividualInterface[]>(`${this.serverUnauthenticatedApiUrlBroadband}/business/details`, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('API request failed:', error);
          return throwError(error);
        }),
        map((subscriptions: IndividualInterface[]) => {
          // Assuming you want to add an 'id' field to each subscription
          // You can modify this part based on your requirements
          return subscriptions.map((subscription, index) => {
            return {
              ...subscription,
              // Generate a unique id for each subscription (you can use any logic)
              id: index + 1,
            };
          });
        })
      );
  }
  
  getActiveBroadbandCustomers(): Observable<number> {
    console.log('Fetching active broadband customers...');
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
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


  // getAllDTHChannels(): Observable<any[]> {
  //   return this.httpClient.get<any[]>(`${this.apiUrl}/dth`);
  // }

  getEnglishEntertainmentChannels(): Observable<Channel[]> {
    console.log('Fetching English entertainment channels...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/channels/english/entertainment`, { headers: headers })
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          }),
          map((channelsData: any[]) => {
            // Extract only the "price" property and add an ID
            return channelsData.map((channel, index) => ({
              id: index + 1,  // Generate a simple ID based on the array index
              name: channel.channelName,  // Include the channel name if needed
              price: channel.price
            }));
          })
        );
    } else {
      console.error('JWT token not found in session storage');
      return throwError('JWT token not found');
    }
  }


  getEnglishSportChannels(): Observable<Channel[]> {
    console.log('Fetching English sport channels...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/channels/english/sport`, { headers: headers })
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          }),
          map((channelsData: any[]) => {
            // Extract only the "price" property and add an ID
            return channelsData.map((channel, index) => ({
              id: index + 1,  // Generate a simple ID based on the array index
              name: channel.channelName,  // Include the channel name if needed
              price: channel.price
            }));
          })
        );
    } else {
      console.error('JWT token not found in session storage');
      return throwError('JWT token not found');
    }
  }

  getEnglishNewsChannels(): Observable<Channel[]> {
    console.log('Fetching English news channels...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });
      console.log(headers);
      
      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/channels/english/news`, { headers: headers })
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          }),
          map((channelsData: any[]) => {
            // Extract only the "price" property and add an ID
            return channelsData.map((channel, index) => ({
              id: index + 1,  // Generate a simple ID based on the array index
              name: channel.channelName,  // Include the channel name if needed
              price: channel.price
            }));
          })
        );
    } else {
      console.error('JWT token not found in session storage');
      return throwError('JWT token not found');
    }
  }

  getHindiEntertainmentChannels(): Observable<Channel[]> {
    console.log('Fetching Hindi entertainment channels...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/channels/hindi/entertainment`, { headers: headers })
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          }),
          map((channelsData: any[]) => {
            // Extract only the "price" property and add an ID
            return channelsData.map((channel, index) => ({
              id: index + 1,  // Generate a simple ID based on the array index
              name: channel.channelName,  // Include the channel name if needed
              price: channel.price
            }));
          })
        );
    } else {
      console.error('JWT token not found in session storage');
      return throwError('JWT token not found');
    }
  }


  getHindiSportChannels(): Observable<Channel[]> {
    console.log('Fetching Hindi sport channels...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/channels/hindi/sport`, { headers: headers })
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          }),
          map((channelsData: any[]) => {
            // Extract only the "price" property and add an ID
            return channelsData.map((channel, index) => ({
              id: index + 1,  // Generate a simple ID based on the array index
              name: channel.channelName,  // Include the channel name if needed
              price: channel.price
            }));
          })
        );
    } else {
      console.error('JWT token not found in session storage');
      return throwError('JWT token not found');
    }
  }

  getHindiNewsChannels(): Observable<Channel[]> {
    console.log('Fetching Hindi news channels...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/channels/hindi/news`, { headers: headers })
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          }),
          map((channelsData: any[]) => {
            // Extract only the "price" property and add an ID
            return channelsData.map((channel, index) => ({
              id: index + 1,  // Generate a simple ID based on the array index
              name: channel.channelName,  // Include the channel name if needed
              price: channel.price
            }));
          })
        );
    } else {
      console.error('JWT token not found in session storage');
      return throwError('JWT token not found');
    }
  }



  getTamilEntertainmentChannels(): Observable<Channel[]> {
    console.log('Fetching Tamil entertainment channels...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/channels/tamil/entertainment`, { headers: headers })
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          }),
          map((channelsData: any[]) => {
            // Extract only the "price" property and add an ID
            return channelsData.map((channel, index) => ({
              id: index + 1,  // Generate a simple ID based on the array index
              name: channel.channelName,  // Include the channel name if needed
              price: channel.price
            }));
          })
        );
    } else {
      console.error('JWT token not found in session storage');
      return throwError('JWT token not found');
    }
  }


  getTamilSportChannels(): Observable<Channel[]> {
    console.log('Fetching Tamil sport channels...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/channels/tamil/sport`, { headers: headers })
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          }),
          map((channelsData: any[]) => {
            // Extract only the "price" property and add an ID
            return channelsData.map((channel, index) => ({
              id: index + 1,  // Generate a simple ID based on the array index
              name: channel.channelName,  // Include the channel name if needed
              price: channel.price
            }));
          })
        );
    } else {
      console.error('JWT token not found in session storage');
      return throwError('JWT token not found');
    }
  }

  getTamilNewsChannels(): Observable<Channel[]> {
    console.log('Fetching Tamil news channels...');

    if (this.jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.jwtToken}`,
        'Content-Type': 'application/json',
      });

      return this.httpClient
        .get<any[]>(`${this.serverApiUrl}/channels/tamil/news`, { headers: headers })
        .pipe(
          catchError((error: any) => {
            console.error('API request failed:', error);
            return throwError(error);
          }),
          map((channelsData: any[]) => {
            // Extract only the "price" property and add an ID
            return channelsData.map((channel, index) => ({
              id: index + 1,  // Generate a simple ID based on the array index
              name: channel.channelName,  // Include the channel name if needed
              price: channel.price
            }));
          })
        );
    } else {
      console.error('JWT token not found in session storage');
      return throwError('JWT token not found');
    }
  }

}
