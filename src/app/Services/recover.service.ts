import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecoverService {

  readonly Url = 'http://217.76.158.200:8080';

  constructor(private http: HttpClient) { }
  editUser(user:any): Observable<any> {console.log("hola");
 
    // const user ={
    //  email: this.userEmail,
    // }
    //PUT
  //    this.username = this.http.get(this.Url+"/api/users/recoverpassword", user);
  // return this.http.put(`${this.Url}/api/users/recoverpassword`, user); 
  return this.http.put(this.Url+"/api/users/recoverpassword", user); }
}