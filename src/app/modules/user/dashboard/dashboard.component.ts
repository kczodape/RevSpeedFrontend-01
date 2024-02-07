import { Component } from '@angular/core';
import { JwtService } from '../../../services/jwt.service';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../services/user.service';
import { response } from 'express';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // constructor(private service: JwtService) { }

  ngOnIt(){
  }


  isSmallScreen: boolean = false;
  isMenuOpen: boolean = false;
  isUserLoggedIn: boolean = false;
  isDarkMode: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver, private jwtService: JwtService, private auth: AuthService, private router: Router, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
    this.checkUserLoggedIn();
    // Moved the theme subscription to the same ngOnInit
    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  checkUserLoggedIn() {
    const jwtToken = sessionStorage.getItem('jwt');
    this.isUserLoggedIn = !!jwtToken;
  }

  logout() {
    this.auth.logOut();
    this.router.navigate(['/login']);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
