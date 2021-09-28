import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { newProductDto } from '../Models/DTOs/newProductDto';
import { updateProductDto } from '../Models/DTOs/updateProductDto';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ProductNoSessionService {
  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/products';

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {
    // //Accedemos al servicio de login para recuperar el token que se ha guardado
    // this.token = this.loginService.getBearerToken;
  }

  getProducts() {
    const headers = new HttpHeaders({
      //Authorization: this.token //removed to showing products without loggin
    });
    return this.httpClient.get(`${this.url}${this.endPoint}`);
  }
}
