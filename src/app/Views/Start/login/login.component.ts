import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

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

    /* reactive forms */
    this.createForm();
  }

  createForm(): void {
    const regexEmail =
      '[a-z0-9]+([._-]?[a-z0-9]+)*' +
      '@' +
      '[a-z0-9]+([._-]?[a-z0-9]+)*.[a-z]{2,4}';

    const regexPassword = '^(?=.d)(?=.[A-Z])(?=.[a-z])(?=.[^wds:])([^s]){8,}$';

    this.form = this.fb.group({
      // [def, sync, async]
      // prettier-ignore
      email: ['', [
        Validators.required,
        Validators.pattern(regexEmail)
      ]],
      // prettier-ignore
      password: ['', [
        Validators.required,
        Validators.pattern(regexPassword)
      ]],
    });
  }
}
