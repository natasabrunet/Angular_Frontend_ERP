import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  

  constructor(
    private loginSvc:LoginService,
    private httpClient: HttpClient
  ) {
    this.token = this.loginSvc.getBearerToken;
   }

  url: string = 'http://217.76.158.200:8080';
  endPoint: string = '/api/notifications';
  token: string;

  getAllNotifications() {
    const headers = new HttpHeaders({
      Authorization: this.token,
    });
    return this.httpClient.get(`${this.url}${this.endPoint}`,
      { headers }
    );
  }
  // getAllCheckInOutNotifications(){
  //   const headers = new HttpHeaders({
  //     Authorization: this.token,
  //   });
  //   return this.httpClient.get(`${this.url}${this.endPoint}`,
  //     { headers }
  //   );
  // }
  //still need to work on that PUT once it works, the idea is to make the notifications read when the user clicks on them.
  // so this function should be triggered from the div the user click.
  readNotifications(id:string){
    const headers = new HttpHeaders({
      Authorization: this.token,
    });
    return this.httpClient.put(`${this.url}${this.endPoint}${'/'+id}${'/rode'}`,{"read":"True"}, 
    {headers}
    );
  }
}
