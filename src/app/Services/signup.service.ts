import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserSignUpDto } from 'src/app/Models/DTOs/newUserDto';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl: string;
  private endPoint: string = '/api/users/clients';
  private errorMessage: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://217.76.158.200:8080';
  }

  createUser(user: UserSignUpDto) {
    return this.httpClient.post(`${this.baseUrl}${this.endPoint}`, user)
    .pipe(
      catchError((err) => {
        console.log(err);
        if ( err instanceof HttpErrorResponse) {
          if (err.status === 422) {
           // this.errorMessage = err.error.message;
           this.errorMessage = "The user already exists in the database.";
          }
        }
        return throwError(new Error(this.errorMessage));
      })
    )
  }

}


