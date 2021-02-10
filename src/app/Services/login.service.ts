import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

import { I_logedUser } from 'src/app/Models/logedUser';
import { I_loginAPIres } from '../Models/loginAPIres';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://217.76.158.200:8080';
  endpoint = '/api/login';
  APIresName = 'erpToken';

  constructor(private http: HttpClient) {}

  // POST
  loginUser(body: I_logedUser): Observable<I_loginAPIres> {
    return this.http.post<I_loginAPIres>(this.url + this.endpoint, body, {
      responseType: 'json',
    });
    // .pipe(map((res: I_loginAPIres): string => res.token));
  }

  // API res to localStorage
  saveToken(APIres: I_loginAPIres): void {
    sessionStorage.setItem(this.APIresName, JSON.stringify(APIres));
  }

  getToken(): string {
    return sessionStorage.getItem(this.APIresName);
  }

  clearToken(): void {
    return sessionStorage.removeItem(this.APIresName);
  }
}
