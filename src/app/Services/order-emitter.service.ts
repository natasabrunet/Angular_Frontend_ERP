import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../Models/order';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class OrderEmitterService {
  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/orders';
  token: string;

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {
    this.token = this.loginService.getBearerToken;
  }

  sendNewOrder(
    date_created: any,
    status: string,
    payment_method: string,
    shipping_address: any,
    billing_address: any,
    total: number,
    order_details: any[]
  ) {
    let body = new Order(
      date_created,
      status,
      payment_method,
      shipping_address,
      billing_address,
      total,
      order_details
    );
    const options = {
      headers: new HttpHeaders({
        Authorization: this.token,
      }),
    };

    return this.httpClient.post(`${this.url}${this.endPoint}`, body, options);
  }
}
