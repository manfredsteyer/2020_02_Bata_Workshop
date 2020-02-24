import { FlightCancellingModule } from "./flight-booking/flight-cancelling/flight-cancelling.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FlightApiModule } from "@flight-workspace/flight-api";

import { AppComponent } from "./app.component";
import { APP_EXTRA_OPTIONS, APP_ROUTES } from "./app.routes";
import { BasketComponent } from "./basket/basket.component";
import { FlightBookingModule } from "./flight-booking/flight-booking.module";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SharedModule } from "./shared/shared.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AirportComponent } from './airport/airport.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,

    BrowserAnimationsModule,
    FlightCancellingModule,

    FlightApiModule.forRoot(),
    SharedModule.forRoot(),
    RouterModule.forRoot([...APP_ROUTES], { ...APP_EXTRA_OPTIONS }),
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent,
    AirportComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
