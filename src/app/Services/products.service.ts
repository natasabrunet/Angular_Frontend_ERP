import { Injectable } from '@angular/core';
import { DoCheck } from '@angular/core';
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
  token: string = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwbG9za3kyMUBob3RtYWlsLmNvbSIsImV4cCI6MTYxMzA3ODQ3NSwiaWF0IjoxNjEzMDYwNDc1fQ.oObrjw3EwElaE88wYzIvDt23kFq4uN1mEXLmNZ4jCTlFanSj5l1N0jkapUEBjhOygP2Q5xJE_QaCrYx9NZZN6w'
  allAPIres = {};


  constructor( 
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {    
    this.allAPIres = this.loginService.getToken();  //Accedemos al servicio de login para recuperar el token que se ha guardado
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
    console.log(`Estoy mostrando el id ${id} desde getProduct`);
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient.get( `${this.url}${this.endPoint}/${id}`, {headers});
  }
 
  updateProduct(id:number, name:string, stock:number, image:string, price:number) {
    console.log(`ID: ${id} Nombre: ${name} Stock: ${stock} Imagen: ${image} Precio: ${price} `);
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
