import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// FIXME: PROVISIONAL... to be substituded by Models class{}
// interface I_login {
//   username: AbstractControl;
//   password: AbstractControl;
// }
interface I_logedUser {
  username?: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://217.76.158.200:8080';
  endpoint = '/api/login';

  constructor(private http: HttpClient) {}

  // POST
  loginUser(body: any): Observable<any> {
    return this.http
      .post<any>(this.url + this.endpoint, body
      //   , {
      //   responseType: 'json',
      // }
      )
      .pipe(
        map((res: any) => (res
        //   {
        //   token: res.token,
        // }
        ))
      );
  }
  // TODO: error handling --> Modal
}
