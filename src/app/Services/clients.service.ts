import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Clients } from '../Models/clients';
import { Observable } from 'rxjs';
import { UserSignUpDto } from '../Models/DTOs/newUserDto';
import { updateClient } from '../Models/updateClient';
//import { newClient } from '../Models/newClient';


@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/clients';
  token: string;
  clientsPerPage: number = 5;
  newClient: Clients


  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService,
  ) {
    //Accedemos al servicio de login para recuperar el token que se ha guardado
    this.token = this.loginService.getBearerToken;
    //console.log("token1: " + this.token);
  }

  getClients(amount: number, page: number) {
    const headers = new HttpHeaders({
      Authorization: this.token,
    });

    return this.httpClient.get(
      `${this.url}${this.endPoint}/list/${amount}/${page}`,
      { headers }
    );
  }

  getClientByID(id: string) {
    const headers = new HttpHeaders({
      Authorization: this.token,
    });
    return this.httpClient.get(`${this.url}${this.endPoint}/${id}`, {
      headers, 
    });
  }


  /*addClient(name: string, dni: string) {
    let body = new newClient(name, dni);

    const options = {
      headers: new HttpHeaders({
        Authorization: this.token
      })
    };
    return this.httpClient.post(`${this.url}${this.endPoint}`, body, options);
  }*/


  updateClient(client){
    let body = new updateClient (client.id, client.dni, client.name_and_surname);

    const options = {
      headers: new HttpHeaders({
        Authorization: this.token
      })
    }
    return this.httpClient.put(`${this.url}${this.endPoint}`, body, options);
  } 

  deleteClient(id: string) {    
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
}


