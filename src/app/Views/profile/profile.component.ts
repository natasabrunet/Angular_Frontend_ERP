import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  Profile: any = {
    name_and_surname: 'Jane Doe',
    dni: '45991142 C',
    address: 'Carrer First St SE, DC 20004',
    email: 'janedoe@gmail.com',
    password: '************',
    image: 'assets/images/mockup-portrait.jpg',
  };

  constructor(private route: Router) {}

  ngOnInit(): void {}

  save() {
    console.log('Profile');
  }
}
