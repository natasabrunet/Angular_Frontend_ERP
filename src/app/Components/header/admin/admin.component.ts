import { Component, OnInit } from '@angular/core';
import {
  faUserCircle,
  faEnvelopeOpen,
} from '@fortawesome/free-regular-svg-icons';
import { faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  name = 'Jane Doe';

  faUserCircle = faUserCircle;
  faEnvelopeOpen = faEnvelopeOpen;
  faCog = faCog;
  faPowerOff = faPowerOff;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
  logout() {
    this.loginService.clearSession();
  }
}
