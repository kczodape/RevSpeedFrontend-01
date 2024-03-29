import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private themeService: ThemeService, private router: Router) { }

  title = 'revspeed-app';
  isDarkMode: boolean = false;

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
