import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/stats/employees/sells';
  token: string;


  constructor(private httpClient: HttpClient, private loginService: LoginService) { 
    this.token = this.loginService.getBearerToken;
  }

  headers: HttpHeaders = new HttpHeaders({
    Authorization: this.loginService.getBearerToken
  });

  getAllOrders() {
    return this.httpClient.get(`${this.url}${this.endPoint}`, { headers: this.headers });
  }
}
