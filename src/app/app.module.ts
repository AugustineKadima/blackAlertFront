import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAlertComponent } from './create-alert/create-alert.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashbordOverviewComponent } from './dashbord-overview/dashbord-overview.component';
import { EditAccountsComponent } from './edit-accounts/edit-accounts.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { LandingPageHeaderComponent } from './landing-page-header/landing-page-header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { MyAlertsComponent } from './my-alerts/my-alerts.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidenavComponent,
    HeaderComponent,
    MyAlertsComponent,
    LoginComponent,
    LandingPageComponent,
    LandingPageHeaderComponent,
    HelpComponent,
    EditAccountsComponent,
    DashbordOverviewComponent,
    DashboardHeaderComponent,
    DashHomeComponent,
    CreateAlertComponent,
    AlertModalComponent,
    SignupComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatBadgeModule,
    MatSliderModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
