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

    this.baseUrl = 'http://217.76.158.200:8080';
   }

   getProducts() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbmFkbWluIiwiZXhwIjoxNjExODkyMjQzLCJpYXQiOjE2MTE4NzQyNDN9.IyV-qlmS6d0weaf69zoDliz5Hl8gCrQnzXBvOhWIhvxwd5DRCGUBe3TC95b9FPsOHgOGfCAqofwEoS53PStQiA'
    });

     return this.httpClient.get( `${this.baseUrl}/api/products`, {headers});
   }

   deleteProduct(id: number) {
     console.log(id);
    const headers = new HttpHeaders({
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbmFkbWluIiwiZXhwIjoxNjExODkyMjQzLCJpYXQiOjE2MTE4NzQyNDN9.IyV-qlmS6d0weaf69zoDliz5Hl8gCrQnzXBvOhWIhvxwd5DRCGUBe3TC95b9FPsOHgOGfCAqofwEoS53PStQiA'
    });

    // return this.httpClient.delete( `${this.baseUrl}/api/products`, {headers});
   }

}
