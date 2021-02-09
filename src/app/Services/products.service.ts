import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/products';
  token: string = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwbG9za3kyMUBob3RtYWlsLmNvbSIsImV4cCI6MTYxMjgzNzI0OSwiaWF0IjoxNjEyODE5MjQ5fQ.xgLNqGSoEO60z75N9KLCeIlb1o7wsrmnGtphGfLrYrCzNz0qslUYgIdFxPi18Z4co1AbaI_2gAJJHWX4yTVdfw'

  constructor( private httpClient: HttpClient ) {

  }


  //  TODO: Get token dynamically
  getProducts() {
    const headers = new HttpHeaders({
      Authorization:  this.token
    });

    return this.httpClient.get( `${this.url}${this.endPoint}`, {headers});
  }



  deleteProduct(id: number) {
    const options ={ 
        headers: new HttpHeaders({
          Authorization: this.token
        }),
        body: {
          id: id
        }};
    return this.httpClient.delete( `${this.url}${this.endPoint}`, options);
   }

}
