import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitable = false;
  disabled = false;
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

  // setup reactive form
  createForm(): void {
    const regexEmail =
      '[a-z0-9]+([._-]?[a-z0-9]+)*' +
      '@' +
      '[a-z0-9]+([._-]?[a-z0-9]+)*.[a-z]{2,4}';

    const regexPassword = '^(?=.d)(?=.[A-Z])(?=.[a-z])(?=.[^wds:])([^s]){8,}$';

    // FIXME: regex CIF
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

  // validation feedback
  validateOnTouched(ref: HTMLElement): number {
    const alias = ref.getAttribute('formControlName');
    let errorType = 0; // counter

    // condition repertoire
    const controlRequired: boolean =
      this.form.get(alias).invalid && this.form.get(alias).touched;

    const controlPattern: boolean =
      this.form.get(alias).hasError('pattern') && this.form.get(alias).touched;

    // error counter
    if (controlRequired) {
      errorType += 1; // errorType 1
    }

    if (controlPattern) {
      errorType += 1; // errorType 2
    }

    return errorType;
  }

  // before submit
  send(): void {
    // on submit
    if (this.form.valid) {
      // FIXME: remocve console log after test ok
      console.log(
        '[disable.console.log in production] -> SUBMITING to API REST...',
        this.form.value
      );

      // then... clean form
      this.form.reset();
      this.disabled = false; // !.btn-erp-red
    } else {
      this.disabled = true; // .btn-erp-red
      return Object.values(this.form.controls).forEach((control) =>
        control.markAsTouched()
      );
    }
  }
}
