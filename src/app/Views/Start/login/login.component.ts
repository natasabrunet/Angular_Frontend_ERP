import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var myModal = document.getElementById('staticBackdrop');
    var myInput = document.getElementById('myInput');

    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus();
    });
  }
}
