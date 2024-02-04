import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
import { JwtService } from './jwt.service';
import * as jwtDecode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router, private jwtService: JwtService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.jwtService.myDetails().pipe(
      map((response: any) => {
        // Assuming the response has a 'role' property
        const userRole = response.role;

        // Check the route and redirect accordingly
        if (userRole === 'ADMIN' && route.routeConfig?.path !== 'admin') {
          // Redirect ADMIN to /admin route
          this.router.navigate(['/admin']);
          return false;
        } else if (userRole === 'USER' && route.routeConfig?.path !== 'user') {
          // Redirect USER to /user route
          this.router.navigate(['/user']);
          return false;
        }

        return true; // Default: Allow access
      }),
      catchError((error) => {
        console.error('Error fetching user details:', error);
        // Handle error, for example, redirect to login
        this.router.navigate(['/login']);
        return [false];
      })
    );
  }

  logOut(): void {
    sessionStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
}