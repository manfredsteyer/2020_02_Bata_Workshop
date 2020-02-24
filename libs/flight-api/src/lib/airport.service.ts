import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  // private http: HttpClient

  public airports: string[] = [];

  constructor(private http: HttpClient) { 
    // this.http = http;
  }

  /* async */ search() {
    const url = 'http://www.angular.at/api/airport';
    const headers = {
      accept: 'application/json'
    }

    const params = {
      startsWith: 'a'
    }

    // const airports2 = await this.http.get<string[]>(url, {headers, params }).toPromise();

    this.http.get<string[]>(url, {headers, params }).subscribe(
      airports => {
        this.airports = airports;
      },
      err => {
        console.error('err', err);
      }
    )
  }
}

