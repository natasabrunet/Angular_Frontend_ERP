import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';

// FIXME: PROVISIONAL... to be substituded by Models class{}
interface I_login {
  username: AbstractControl;
  password: AbstractControl;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://217.76.158.200:8080';
  endpoint = '/api/login';

  constructor(private http: HttpClient) {}

  // POST
  loginUser(body: I_login): Observable<object> {
    return this.http.post<I_login>(this.url + this.endpoint, body, {
      responseType: 'json',
    });
  }
}
