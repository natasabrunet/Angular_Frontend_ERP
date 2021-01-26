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
  api = 'https://jsonplaceholder.typicode.com'; // Open Database
  endpont = '/posts';

  constructor(private http: HttpClient) {}

  // POST
  postOne(body: I_login): Observable<object> {
    return this.http.post<I_login>(
      this.api + this.endpont, // open API REST
      body
    );
  }
}
