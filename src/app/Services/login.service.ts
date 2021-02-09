import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { I_logedUser } from 'src/app/Models/logedUser';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://217.76.158.200:8080';
  endpoint = '/api/login';
  APIresName = 'erpToken';

  constructor(private http: HttpClient) {}

  // POST
  loginUser(body: I_logedUser): Observable<object> {
    return this.http
      .post<I_logedUser>(this.url + this.endpoint, body, {
        responseType: 'json',
      })
      .pipe(map((res: object) => res));
    // FIXME: interface update token + pipe response PARTIAL
    
/*
{
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEMzgzMTA5M1IiLCJleHAiOjE2MTI5MzA0MTEsImlhdCI6MTYxMjkxMjQxMX0.fQ9v_EgjFNEj6iGrsosMAql4iLjm4WfCMPMCv0oSJU5D6mdcC0zbYLuMG6u8oDtcgwlXHVS6dETS_fM7tf18YQ",
    "bearer": "Bearer",
    "nombreUsuario": "D3831093R",
    "authorities": [
        {
            "authority": "ROLE_CLIENT"
        }
    ]
}
*/
  }

  // API res to localStorage
  saveToken(token: string): void {
    sessionStorage.setItem(this.APIresName, token);
  }

  getToken(): string {
    return sessionStorage.getItem(this.APIresName);
  }

  clearToken(): void {
    return sessionStorage.removeItem(this.APIresName);
  }
}
