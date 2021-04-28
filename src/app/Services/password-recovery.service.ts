import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {

  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/users/recoverpassword';
  token: string;

    constructor(private loginService: LoginService, 
              private httpClient : HttpClient
    ) {
    this.token = this.loginService.getBearerToken;
   }

  passwordRecovery(body){
    const headers = new HttpHeaders({
    });
    return this.httpClient.put( `${this.url}${this.endPoint}`, body, {headers} );
  }
}
