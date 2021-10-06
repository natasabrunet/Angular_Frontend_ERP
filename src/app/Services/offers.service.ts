import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})


export class OffersService {
  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/offers';
  token: string;


  offerById: Observable<any>;


  constructor(private httpClient: HttpClient, private loginService: LoginService) {
    this.token = this.loginService.getBearerToken;
   }

   headers: HttpHeaders = new HttpHeaders({
     Authorization: this.loginService.getBearerToken
   });

   getAllOffers(){
     return this.httpClient.get(`${this.url}${this.endPoint}`, {headers: this.headers});
   }

   //Get offers by id
   getOfferById(id: string){
     return (this.offerById = this.httpClient.get(`${this.url}${this.endPoint}/${id}`, {headers: this.headers}));
   }
}

