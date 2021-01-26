import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';

// FIXME: pROVISIONAL... to be substituded by Models class{}
export interface IntContactForm {
  submited: AbstractControl;
  name: AbstractControl;
  email: AbstractControl;
  msg: AbstractControl;
  lgpd: AbstractControl;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  api = 'https://jsonplaceholder.typicode.com'; // Open Database
  endpont = '/posts';

  constructor(private http: HttpClient) {}

  // POST
  postOne(body: IntContactForm): Observable<object> {
    return this.http.post<IntContactForm>(
      this.api + this.endpont, // open API REST
      body
    );
  }
}
