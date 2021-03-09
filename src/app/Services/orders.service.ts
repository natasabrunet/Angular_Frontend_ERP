import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/orders';
  token: string;

  orderById: Observable<any>;

  /*headers: HttpHeaders = new HttpHeaders({
    Authorization: this.loginService.getBearerToken
  });*/

  constructor(private httpClient: HttpClient, private loginService: LoginService) {
    this.token = this.loginService.getBearerToken;
  }

  getAllOrders() {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient.get(`${this.url}${this.endPoint}`, { headers });
  }

  getOrderById(id: string) {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return (this.orderById = this.httpClient.get(`${this.url}${this.endPoint}/${id}`, { headers }));
  }

  /* getTotalPrice(){

  } */

  /* deleteOrder(id: string){

  } */
}
