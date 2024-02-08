import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

// Updated build
// const BASE_URL = ['http://localhost:9898/'];

const BASE_URL = ['http://34.27.124.145/'];

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private emailExistsErrorSubject = new BehaviorSubject<boolean>(false);
  emailExistsError$ = this.emailExistsErrorSubject.asObservable();

  constructor(private http: HttpClient) {}

  register(signRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'signup', signRequest).pipe(
      catchError((error) => {
        if (error.status === 400 && error.error) {
          this.emailExistsErrorSubject.next(true);
        }
        throw error;
      })
    );
  }

  resetEmailExistsError() {
    this.emailExistsErrorSubject.next(false);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'login', loginRequest).pipe(
      catchError((error: any) => {
        if (error.status === 401) {
          alert('Invalid credentials! Please check and enter again');
        } else {
          console.log(
            'Setting alert message: Login failed. Please try again later.'
          );
          console.error('Login failed. Error:', error);
        }
        return throwError(error);
      })
    );
  }
  hello(): Observable<any> {
    return this.http.get(BASE_URL + 'api/hello', {
      headers: this.createAuhtorizationHeader() || {},
    });
  }

  myDetails(): Observable<any> {
    return this.http.get(BASE_URL + 'api/mydetails', {
      headers: this.createAuhtorizationHeader() || {},
    });
  }

  private createAuhtorizationHeader() {
    const jwtToken = sessionStorage.getItem('jwt');
    if (jwtToken) {
      console.log('JWT token found in session storage', jwtToken);
      return new HttpHeaders().set('Authorization', 'Bearer ' + jwtToken);
    } else {
      console.log('JWT token not found in session storage');
    }
    return null;
  }

  private apiUrl = `${BASE_URL}email/send`;
  sendEmail(toEmail: string, subject: string, body: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const requestBody = { toEmail, subject, body };

    return this.http.post(this.apiUrl, requestBody, {
      headers,
      responseType: 'text',
    });
  }

  updateDetails(data: any): Observable<any> {
    return this.http.put(BASE_URL + 'api/mydetails', data, {
      headers: this.createAuhtorizationHeader() || {},
    });
  }
  deleteDetails(): Observable<any> {
    return this.http.put(
      BASE_URL + 'api/mydetails/delete',
      {},
      {
        headers: this.createAuhtorizationHeader() || {},
      }
    );
  }

  private apiUrll = `${BASE_URL}email/send`;
  sendEmailforContact(toEmail: string, subject: string, body: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
 
    const requestBody = { toEmail, subject, body };
 
    return this.http.post(this.apiUrll, requestBody, {
      headers,
      responseType: 'text',
    });
  }
}
