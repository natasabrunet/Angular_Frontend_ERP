import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSignUpDto } from 'src/app/Models/DTOs/newUserDto';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl: string;
  private endPoint: string = '/api/users/clients';

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://217.76.158.200:8080';
  }

  createUser(user: UserSignUpDto) {
    return this.httpClient.post(`${this.baseUrl}${this.endPoint}`, user);
  }

}


