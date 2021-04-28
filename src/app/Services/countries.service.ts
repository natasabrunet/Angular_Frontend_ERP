import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from '../Models/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json'
  }

  allCountries(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
