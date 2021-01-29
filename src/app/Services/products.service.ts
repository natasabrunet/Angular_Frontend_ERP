import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/newProduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products;
  private baseUrl: string;

 


  constructor( private httpClient: HttpClient ) {

    this.baseUrl = 'http://217.76.158.200:8080';
   }


  //  TODO: Get token dynamically
   getProducts() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvaWhvaWhvaWgiLCJleHAiOjE2MTE5MzE1NzUsImlhdCI6MTYxMTkxMzU3NX0.kxZsqSwCvKHWqTBlM2xO4tthKFXYeq-LoVYmbmLSTj6nZ2loaV_d7xsu_XJ6CdyEegNt_ilZPsw3-IFSuRXBIw'
    });

     return this.httpClient.get( `${this.baseUrl}/api/products`, {headers});
   }



  //  TODO: Get token dynamically
   deleteProduct(id: number) {
    const options ={ 
        headers: new HttpHeaders({
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvaWhvaWhvaWgiLCJleHAiOjE2MTE5MjkzMDAsImlhdCI6MTYxMTkxMTMwMH0.PrD1e74OPngIAEvt3DHg4GAOMNfQCaM0XhRreo1hAHtf9cTm8mzlfJR13KaCSiTvpyLKVrAOEaAovoPHvKT7ew'
        }),
        body: {
          id: id
        }};

    return this.httpClient.delete( `${this.baseUrl}/api/products`, options);
   }

}
