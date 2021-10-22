import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class WorkingHoursService {

  constructor(
    private loginService: LoginService,
    private httpClient: HttpClient,) { 
    this.token = this.loginService.getBearerToken;
  }

  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/workinghours/employeeid';
  token: string;


  getWorkingHoursByID(id: string) {
    const headers = new HttpHeaders({
      Authorization: this.token,
    });
    return this.httpClient.get(`${this.url}${this.endPoint}/${id}`, {
      headers,
    });
  }




}
