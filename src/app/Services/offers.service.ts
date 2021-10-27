import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Offer } from '../Models/offer';

@Injectable({
  providedIn: 'root'
})


export class OffersService {
  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/offers';
  token: string;


  constructor(
    private httpClient: HttpClient, 
    private loginService: LoginService
    ) {
      //Accedemos al servicio de login para recuperar el token que se ha guardado
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
      return this.httpClient.get(`${this.url}${this.endPoint}/${id}`, {
        headers: this.headers       
      });
    }

    updateOffer(offer){
      let body = new Offer ( offer.id, offer.name, offer.discount, offer.start_date, offer.end_date, offer.paid_quantity, offer.free_quantity);

      const options = {
        headers: new HttpHeaders({
          Authorization: this.token
        })
      }
      return this.httpClient.put(`${this.url}${this.endPoint}`, body, options);
    }

    deleteOffer(id: string) {    
      const options = {
        headers: new HttpHeaders({
          Authorization: this.token
        }),
        body: {
          id: id,
          name: "offer  deteled"
        }
      };
      return this.httpClient.delete(`${this.url}${this.endPoint}`, options);
    }
  }

