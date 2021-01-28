import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { I_logedUser } from '../Models/logedUser';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://217.76.158.200:8080';
  endpoint = '/api/login';

  constructor(private http: HttpClient) {}

  // POST
  loginUser(body: I_logedUser): Observable<I_logedUser> {
    return this.http
      .post<I_logedUser>(
        this.url + this.endpoint,
        body
          , {
          responseType: 'json',
        }
      )
      .pipe(
        map(
          (res: I_logedUser) =>
            res
            //   {
            //   token: res.token,
            // }
        )
      );
  }
  // TODO: error handling --> Modal
}
