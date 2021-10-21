import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleProductWithoutSessionService {

  constructor(private http:HttpClient) { }

  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/products';
  productsData;
  

  getProductsInfo(){
    return this.http.get(this.url+this.endPoint)
  }
  getProducts(id:number):any{
  }
  


 







}
