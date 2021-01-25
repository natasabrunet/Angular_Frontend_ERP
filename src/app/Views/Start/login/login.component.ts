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

  // hooks
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

  // methods
  createForm(): void {
    const regexEmail =
      '[a-z0-9]+([._-]?[a-z0-9]+)*' +
      '@' +
      '[a-z0-9]+([._-]?[a-z0-9]+)*.[a-z]{2,4}';

    const regexPassword = '^(?=.d)(?=.[A-Z])(?=.[a-z])(?=.[^wds:])([^s]){8,}$';

    const regexCIF = '^[a-zA-Z]{1}d{7}[a-zA-Z0-9]{1}$';

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

  validateOnTouched(ref: HTMLElement): number {
    let errorType = 0; // counter
    const alias = ref.getAttribute('formControlName');

    // condition repertoire
    const controlRequired: boolean =
      this.form.get(alias).invalid && this.form.get(alias).touched;

    const controlMinLength: boolean =
      this.form.get(alias).hasError('minlength') &&
      this.form.get(alias).touched;

    const controlPattern: boolean =
      this.form.get(alias).hasError('pattern') && this.form.get(alias).touched;

    // const min: boolean = ... // OTHER. etc.

    // NAME
    if (alias === 'name') {
      if (controlRequired) {
        errorType += 1; // errorType 1
      }

      if (controlMinLength) {
        errorType += 1; // errorType 2
      }
    }

    // EMAIL
    if (alias === 'email') {
      if (controlRequired) {
        errorType += 1; // errorType 1
      }

      if (controlPattern) {
        errorType += 1; // errorType 2
      }
    }

    // MSG
    if (alias === 'msg') {
      if (controlRequired) {
        errorType += 1; // errorType 1
      }

      if (controlMinLength) {
        errorType += 1; // errorType 2
      }
    }

    // lGPD
    if (alias === 'lgpd') {
      if (controlRequired) {
        errorType += 1; // errorType 1
      }
    }

    // OTHER
    //  if (alias === 'number') { ... } etc.

    return errorType;
  }
}
