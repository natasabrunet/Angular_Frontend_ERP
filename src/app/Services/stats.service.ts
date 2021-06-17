import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/stats/employees/sells';
  endPoint2: string = '/api/stats/employees/bestsales';
  endPoint3:string = '/api/stats/employees/worstsales';
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
  getBestEmployee(){
    return this.httpClient.get(`${this.url}${this.endPoint2}`, { headers: this.headers });
  }
  getWorstEmployee(){
    return this.httpClient.get(`${this.url}${this.endPoint3}`, { headers: this.headers });
  }
}
