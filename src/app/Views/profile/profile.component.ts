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
    dni: '45991142C',
    address: 'Carrer Horta 161',
    email: 'janedoe@gmail.com',
    password: '12548H',
    image: 'assets/images/mockup-portrait.jpg',
  };

  constructor(private route: Router) {}

  ngOnInit(): void {}

  save() {
    console.log('No pasa nada');
  }
}
