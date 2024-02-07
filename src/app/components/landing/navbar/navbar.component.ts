import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { JwtService } from '../../../services/jwt.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
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
