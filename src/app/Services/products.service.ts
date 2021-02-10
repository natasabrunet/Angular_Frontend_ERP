import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { setTokenSourceMapRange } from 'typescript';
import { Product } from '../Models/newProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/products';
  token: string = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwbG9za3kyMUBob3RtYWlsLmNvbSIsImV4cCI6MTYxMjk1OTQ4OCwiaWF0IjoxNjEyOTQxNDg4fQ.N2Cvfaq70JifmC7ui41I53nhjsGImfskRYNjiAcKwAJqWvxTfndWnGl0AjXOpZaG7yfmqATnNNXFVEbhV5Kbog'

  constructor( private httpClient: HttpClient ) { }


  getProducts() {
   const headers = new HttpHeaders({
     Authorization: this.token
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

  getProduct(id: number) {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient.get( `${this.url}${this.endPoint}/${id}`, {headers});
  }
 
  updateProduct(id:number, name:string, stock:number, image:string, price:number) {
    let body= new Product(name, stock, price, image);
    
    const options ={ 
      headers: new HttpHeaders({
       Authorization: this.token
      }),
      body: {
        id: id
      }
    }; 
    return this.httpClient.put( `${this.url}${this.endPoint}`, options);
  }

  addProduct(name:string, stock:number, image:string,  price:number) {
    let body= new Product(name, stock, price, image);

    const options ={ 
      headers: new HttpHeaders({
       Authorization: this.token
      })
    }; 
    return this.httpClient.post(`${this.url}${this.endPoint}`, body, options) ;
  }
}
