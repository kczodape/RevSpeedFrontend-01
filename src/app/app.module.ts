import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/landing/navbar/navbar.component';
import { LoginComponent } from './components/landing/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/landing/register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { JwtService } from './services/jwt.service';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CarouselComponent } from './components/landing/carousel/carousel.component';
import { BroadbandplansComponent } from './components/landing/broadbandplans/broadbandplans.component';
import { IndividualcardsComponent } from './components/landing/broadbandplans/individualcards/individualcards.component';
import { BusinesscardsComponent } from './components/landing/broadbandplans/businesscards/businesscards.component';
import { ViewdetailedbroadbandComponent } from './components/landing/viewdetailedbroadband/viewdetailedbroadband.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './components/landing/aboutus/aboutus.component';
import { IndividualplanComponent } from './components/landing/viewdetailedbroadband/individualplan/individualplan.component';
import { BusinessplanComponent } from './components/landing/viewdetailedbroadband/businessplan/businessplan.component';
import { ForgotComponent } from './components/landing/forgot/forgot.component';
import { OtpdialogComponent } from './components/landing/forgot/otpdialog/otpdialog.component';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { ResetComponent } from './components/landing/forgot/otpdialog/reset/reset.component';
import { ContactComponent } from './components/landing/contact/contact.component';
import { DthplansComponent } from './components/landing/dthplans/dthplans.component';
import { EnglishComponent } from './components/landing/dthplans/english/english.component';
import { TamilComponent } from './components/landing/dthplans/tamil/tamil.component';
import { HindiComponent } from './components/landing/dthplans/hindi/hindi.component';
import { ViewdetailedDthplansComponent } from './components/landing/viewdetailed-dthplans/viewdetailed-dthplans.component';

import { EnglishPlanComponent } from './components/landing/viewdetailed-dthplans/english-plan/english-plan.component';
import { HindiPlanComponent } from './components/landing/viewdetailed-dthplans/hindi-plan/hindi-plan.component';
import { TamilPlanComponent } from './components/landing/viewdetailed-dthplans/tamil-plan/tamil-plan.component';
import { EnglishEntertainmentComponent } from './components/landing/viewdetailed-dthplans/english-plan/english-entertainment/english-entertainment.component';
import { EnglishSportsComponent } from './components/landing/viewdetailed-dthplans/english-plan/english-sports/english-sports.component';
import { EnglishNewsComponent } from './components/landing/viewdetailed-dthplans/english-plan/english-news/english-news.component';
import { HindiEntertainmentComponent } from './components/landing/viewdetailed-dthplans/hindi-plan/hindi-entertainment/hindi-entertainment.component';
import { HindiNewsComponent } from './components/landing/viewdetailed-dthplans/hindi-plan/hindi-news/hindi-news.component';
import { HindiSportComponent } from './components/landing/viewdetailed-dthplans/hindi-plan/hindi-sport/hindi-sport.component';
import { TamilEntertainmentComponent } from './components/landing/viewdetailed-dthplans/tamil-plan/tamil-entertainment/tamil-entertainment.component';
import { TamilSportsComponent } from './components/landing/viewdetailed-dthplans/tamil-plan/tamil-sports/tamil-sports.component';
import { TamilNewsComponent } from './components/landing/viewdetailed-dthplans/tamil-plan/tamil-news/tamil-news.component';

// import { EntertainmentComponent } from './components/landing/viewdetailed-dthplans/english/entertainment/entertainment.component';
// import { SportsComponent } from './components/landing/viewdetailed-dthplans/english/sports/sports.component';
// import { NewsComponent } from './components/landing/viewdetailed-dthplans/english/news/news.component';
import { MatListModule } from '@angular/material/list';
import { PaymentDialougeComponent } from './components/landing/viewdetailedbroadband/individualplan/payment-dialouge/payment-dialouge.component';
import { HandelAuthenticationDialougeComponent } from './components/landing/viewdetailedbroadband/individualplan/handel-authentication-dialouge/handel-authentication-dialouge.component';
import { BusinessPaymentDialogComponent } from './components/landing/viewdetailedbroadband/businessplan/business-payment-dialog/business-payment-dialog.component';
import { HandelBusinessAuthenticationDialogeComponent } from './components/landing/viewdetailedbroadband/businessplan/handel-business-authentication-dialoge/handel-business-authentication-dialoge.component';
import { EnglishPaymentDialogeComponent } from './components/landing/viewdetailed-dthplans/english-plan/english-payment-dialoge/english-payment-dialoge.component';
import { HandelEnglishAuthenticationDialogeComponent } from './components/landing/viewdetailed-dthplans/english-plan/handel-english-authentication-dialoge/handel-english-authentication-dialoge.component';
import { HindiPaymentDialogeComponent } from './components/landing/viewdetailed-dthplans/hindi-plan/hindi-payment-dialoge/hindi-payment-dialoge.component';
import { HandelHindiAuthenticationDialogeComponent } from './components/landing/viewdetailed-dthplans/hindi-plan/handel-hindi-authentication-dialoge/handel-hindi-authentication-dialoge.component';
import { TamilPaymentDialogeComponent } from './components/landing/viewdetailed-dthplans/tamil-plan/tamil-payment-dialoge/tamil-payment-dialoge.component';
import { HandelTamilAuthenticationDialogeComponent } from './components/landing/viewdetailed-dthplans/tamil-plan/handel-tamil-authentication-dialoge/handel-tamil-authentication-dialoge.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { PopComponent } from './components/landing/contact/pop/pop.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CarouselComponent,
    BroadbandplansComponent,
    IndividualcardsComponent,
    BusinesscardsComponent,
    ViewdetailedbroadbandComponent,
    FooterComponent,
    AboutusComponent,
    IndividualplanComponent,
    BusinessplanComponent,
    ForgotComponent,
    OtpdialogComponent,
    ResetComponent,
    ContactComponent,
    FooterComponent,
    DthplansComponent,
    EnglishComponent,
    TamilComponent,
    HindiComponent,
    ViewdetailedDthplansComponent,
    EnglishPlanComponent,
    HindiPlanComponent,
    TamilPlanComponent,
    EnglishEntertainmentComponent,
    EnglishSportsComponent,
    EnglishNewsComponent,
    HindiEntertainmentComponent,
    HindiNewsComponent,
    HindiSportComponent,
    TamilEntertainmentComponent,
    TamilSportsComponent,
    TamilNewsComponent,
    PaymentDialougeComponent,
    HandelAuthenticationDialougeComponent,
    BusinessPaymentDialogComponent,
    HandelBusinessAuthenticationDialogeComponent,
    EnglishPaymentDialogeComponent,
    HandelEnglishAuthenticationDialogeComponent,
    HindiPaymentDialogeComponent,
    HandelHindiAuthenticationDialogeComponent,
    TamilPaymentDialogeComponent,
    HandelTamilAuthenticationDialogeComponent,
    PopComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,
    MatListModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => sessionStorage.getItem('jwt'),
        // allowedDomains: ['your-api-domain.com'], // replace with your API domain
      },
    }),
    MatDialogModule
  ],
  providers: [
    // AuthService,
    JwtService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
