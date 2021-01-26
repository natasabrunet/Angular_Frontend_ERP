import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';

// FIXME: PROVISIONAL... to be substituded by Models class{}
interface I_login {
  email: AbstractControl;
  password: AbstractControl;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  api = 'https://jsonplaceholder.typicode.com/posts'; // Open Database

  constructor(private http: HttpClient) {}

  // POST
  postOne(body: I_login): Observable<object> {
    return this.http.post<I_login>(this.api, body);
  }
}
