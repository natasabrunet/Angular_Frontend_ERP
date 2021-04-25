import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserSignUpDto } from 'src/app/Models/DTOs/newUserDto';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl: string;
  private endPoint: string = '/api/users/clients';

  // error handlers
  private errorMessage: string;


  constructor(private httpClient: HttpClient,
              private toastr: ToastrService,
              private route: Router) {
    this.baseUrl = 'http://217.76.158.200:8080';
  }

  createUser(user: UserSignUpDto) {
    return this.httpClient.post(`${this.baseUrl}${this.endPoint}`, user)
    .pipe(
      catchError((err) => {
        console.log(err);
        if(err instanceof HttpErrorResponse) {
          if(err.error instanceof ErrorEvent) {
            this.errorMessage = "An unexpected error has happened. \n You'll be redirected to Home page";
            this.toastr.error(this.errorMessage, "Unexpected Error");
            // redirection
            this.route.navigate(['/home']);
          } else {
            console.log(`Error status: ${err.status} ${err.statusText} \n Error message: ${err.message}`);
            switch (err.status) {
              case 401:  // unauthorized
                  this.errorMessage = "Unauthorized. Please, Sign-up or Login";
                  this.toastr.error(this.errorMessage, "Unauthorized");
                  this.route.navigate(['/sign-up']);
                break;

              case 403:  // forbidden
                  this.errorMessage = "Access to that resource is forbidden.";
                  this.toastr.error(this.errorMessage, "Forbidden");
                  this.route.navigate(['/sign-up']);
                break;

              case 404:  // not found
                  this.errorMessage = "The requested resource was not found";
                  this.toastr.error(this.errorMessage, "Not found");
                  this.route.navigate(['/products-without-session']);
                break;

              case 422:  // user exist
                  this.errorMessage = "User and mail already exist in the database. \n Sign-up with different mail ";
                  this.toastr.error(this.errorMessage, "User and mail exits");
                  this.route.navigate(['/sign-up']);
                break;

              default:
                // other errors
                this.errorMessage = "Unexpected Error.\n You'll be redirected to Home page";
                this.toastr.error(this.errorMessage, "Other Erros");
                this.route.navigate(['/home']);
                break;
            }
          }
        }
        return throwError(new Error(this.errorMessage));
      })
    )
  }

}

