import {ExtraOptions, Routes} from '@angular/router';
import {BasketComponent} from './basket/basket.component';
import {HomeComponent} from './home/home.component';
import { AirportComponent } from './airport/airport.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: 'airports',
    component: AirportComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {

}
