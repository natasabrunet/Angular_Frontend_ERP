import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/clients';
  token: string; 
  defaultClientsPerPage = 1;

  constructor( 
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {   
    //Accedemos al servicio de login para recuperar el token que se ha guardado
    this.token = this.loginService.getBearerToken;  
  }
  
  getAllClients() {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient.get( `${this.url}${this.endPoint}`, {headers} );
  }
  
  getClients(amount, page ) {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient.get( `${this.url}${this.endPoint}/list/${amount}/${page}`, {headers} );
  }
}
