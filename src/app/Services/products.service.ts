import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { newProductDto } from '../Models/DTOs/newProductDto';
import { updateProductDto } from '../Models/DTOs/updateProductDto';
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
  ) {   
    //Accedemos al servicio de login para recuperar el token que se ha guardado
    this.token = this.loginService.getBearerToken;  
  }


  getProducts() {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient.get( `${this.url}${this.endPoint}`, {headers} );
  }


  deleteProduct(id: number) {
    const options = { 
      headers: new HttpHeaders({
        Authorization: this.token
      }),
      body: {
        id: id
      }
    };
    return this.httpClient.delete(`${this.url}${this.endPoint}`, options);
  }

  
  getProduct(id: number) {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient.get(`${this.url}${this.endPoint}/${id}`, {headers});
  }
 

  updateProduct(id:number, name:string, stock:number, image:string, price:number) {
    let body= new updateProductDto(id, name, stock, price, image);
    
    const options = { 
      headers: new HttpHeaders({
        Authorization: this.token
      })
    }; 
    return this.httpClient.put(`${this.url}${this.endPoint}`, body, options);
  }


  addProduct(name:string, stock:number, image:string,  price:number) {
    let body= new newProductDto(name, stock, price, image);

    const options = { 
      headers: new HttpHeaders({
        Authorization: this.token
      })
    }; 
    return this.httpClient.post(`${this.url}${this.endPoint}`, body, options) ;
  }  

}

