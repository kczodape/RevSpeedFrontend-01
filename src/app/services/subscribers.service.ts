import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  // private apiUrl = 'http://localhost:8080/login';

  private apiUrl = 'http://34.70.138.168/login';

  constructor(private http: HttpClient) {}

  updatePassword(email: string, newPassword: string): Observable<any> {
    const url = `${this.apiUrl}/updatepassword?email=${email}&password=${newPassword}`;
    
    // You can customize headers as needed
    const headers = {
      'Content-Type': 'application/json',
      // Add any other headers if required
    };

    // The request body is empty for a PATCH request with parameters in the URL
    const requestBody = {};

    return this.http.post(url, requestBody, { headers });
  }
}
