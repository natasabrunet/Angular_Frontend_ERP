import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { ReqResponseEmployees } from '../Models/reqResponse';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/employees';
  token: string;
  employeesPerPage = 5;

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {
    //Accedemos al servicio de login para recuperar el token que se ha guardado
    this.token = this.loginService.getBearerToken;
  }


  getAllEmployees(): Observable<ReqResponseEmployees> {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    //console.log(headers)
    return this.httpClient.get<ReqResponseEmployees>( `${this.url}${this.endPoint}`, {headers} )

  }

  getEmployees(amount: number, page: number ) {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient.get( `${this.url}${this.endPoint}/list/${amount}/${page}`, {headers} )

  }

  getEmployeeByID(id: string ) {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient.get( `${this.url}${this.endPoint}/${id}`, {headers} );
  }

  updateEmployee(employee) {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient.put( `${this.url}${this.endPoint}`, employee, {headers} );

  }

  deleteEmployee(id: string) {
    const headers = new HttpHeaders({
      Authorization: this.token
    });

    return this.httpClient.delete( `${this.url}${this.endPoint}/${id}`, {headers} );
  }

}
