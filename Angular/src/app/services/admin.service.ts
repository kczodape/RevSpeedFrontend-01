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
  jwtToken = sessionStorage.getItem('jwt');

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

  getAllIndividualSubscriptions(): Observable<IndividualInterface[]> {
    return this.httpClient.get<IndividualInterface[]>(`${this.apiUrl}/individualSubscriptions`);
  }

  // getAllBusinessSubscriptions(): Observable<IndividualInterface[]> {
  //   return this.httpClient.get<IndividualInterface[]>(`${this.apiUrl}/businessSubscriptions`);
  // }

  getAllBusinessSubscriptions(): Observable<IndividualInterface[]> {
    console.log('Fetching business subscriptions...');
  
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
  

  getAllDTHChannels(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/dth`);
  }

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


  // New method to fetch OTT platform data
  getOTTPlatforms(): Observable<{ id: number; ott_platform: string }[]> {
    return this.httpClient.get<{ id: number; ott_platform: string }[]>(`${this.apiUrl}/ott`);
  }
}
