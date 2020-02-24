import { Component, OnInit } from '@angular/core';
import { AirportService } from '@flight-workspace/flight-api';

@Component({
  selector: 'flight-workspace-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

  get airports() {
    return this.airportService.airports;
  }

  constructor(private airportService: AirportService) { }

  ngOnInit(): void {
    this.airportService.search();
  }


}
