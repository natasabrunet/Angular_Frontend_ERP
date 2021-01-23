import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // to enable focus on modal if you need it //
    // var myModal = document.getElementById('staticBackdrop');
    // var myInput = document.getElementById('myInput');
    // myModal.addEventListener('shown.bs.modal', function () {
    //   myInput.focus();
    // });
    // TODO:
    // - MockUp login (any data it's okay to login)
    // -Validations (required + patterns)
    // -Animations (animation css or B5 or NOTHING)
    // -Lo que creais conveniente --oR NOTHING
  }
}
