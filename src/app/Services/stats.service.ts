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
  endPoint4:string = '/api/stats/employees/toptensales';
  endPoint5:string = '/api/stats/salaries/year';
  endPoint6:string = '/api/stats/salaries/month';
  endPoint7:string = '/api/stats/profits/{year}';
  endPoint8:string = '/api/stats/profits';
  endPoint9:string = '/api/stats/employees/toptensales';
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

  gettoptensales(){
    return this.httpClient.get(`${this.url}${this.endPoint4}`, { headers: this.headers });
  }

  getsalariesyear(){
    return this.httpClient.get(`${this.url}${this.endPoint5}`, { headers: this.headers });
  }

  getsalariesmonth(){
    return this.httpClient.get(`${this.url}${this.endPoint6}`, { headers: this.headers });
  }

  getprofityear(){
    return this.httpClient.get(`${this.url}${this.endPoint7}`, { headers: this.headers });
  }

  getprofitmonth(year, month){
    if(month < 10){
      month = "0"+month;
    }
    return this.httpClient.get(`${this.url}${this.endPoint8}/${year}/${month}`, { headers: this.headers });
  }

  getToptensales(begin_date:string, end_date:string){
    const options = {
      headers: new HttpHeaders({
        Authorization: this.token
      }),
      body: {
          begin_date: "2021-01-01T00:00:00",
          end_date: "2021-04-29T23:59:59"
      }
    };
    return this.httpClient.get(`${this.url}${this.endPoint9}`, options);
  }
}
