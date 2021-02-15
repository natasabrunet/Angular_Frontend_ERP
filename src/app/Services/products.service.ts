import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../Models/newProduct';
import { updateProduct } from '../Models/updateProduct';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/products';
  token: string; 


  constructor( 
    private httpClient: HttpClient,
    private loginService: LoginService
  ) 
  {   
    this.token = this.loginService.getBearerToken;  //Accedemos al servicio de login para recuperar el token que se ha guardado
    this.token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwbG9za3kyMUBob3RtYWlsLmNvbSIsImV4cCI6MTYxMzQyNzQ5MiwiaWF0IjoxNjEzNDA5NDkyfQ.GtG8Rpb_H4u6JMu39pY5jNZ2_cNgq8_HJjqzrvxb2mY1NCc_ekO2lIabcx5FIDE8GTJSe3cW_6neoNqmNtQ8Hw";
  }

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
    let body= new updateProduct(id, name, stock, price, image);
    
    const options ={ 
      headers: new HttpHeaders({
       Authorization: this.token
      })
    }; 
    return this.httpClient.put( `${this.url}${this.endPoint}`, body, options);
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

