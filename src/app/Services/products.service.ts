import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/newProduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products;
  baseUrl: string;
 


  constructor( private httpClient: HttpClient ) {
    console.log('Service working');
    this.baseUrl = 'http://217.76.158.200:8080';
   }

   getProducts() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvaWhvaWhvaWgiLCJleHAiOjE2MTE4ODgyOTQsImlhdCI6MTYxMTg3MDI5NH0._zBzI8F9Z4BZRs6FCon0ws9T4gutC6tPuqQJx67dYMfRMyFWxXfQqhxnt6Br_VW3NJlKunAOvKIW7BpDDUjYOg'
    });

     return this.httpClient.get( `${this.baseUrl}/api/products`, {headers});
   }
}
