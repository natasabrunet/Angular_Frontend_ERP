import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, DoCheck {
  disabled = false;
  submitable = false;
  NIF = false;
  form: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder, router: Router) {}

  ngOnInit(): void {
    // TODO: modal after from sent and API token or body back
    this.createForm();
  }

  ngDoCheck(): void {
    // .btn style + button@submit disabled
    this.submitable = this.form.valid ? true : false;
  }

  toggleNIF() {
    this.NIF = !this.NIF;
    this.createForm(); //rebuild form with current NIF | email
  }
  // setup form
  createForm(): void {
    const regexEmail = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';

    const regexNIF =
      '^([ABCDEFGHJNPQRSUVW|abcdefghjnpqrsuvw])[\\d]{7}(\\w|\\d)$';
    // NOTE: IF vs CIF => https://getquipu.com/blog/diferencia-entre-el-cif-y-el-nif/

    const regexPassword =
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[\\d])(?=.*[@$!%*#?&])[a-zA-Z0-9@$!%*#?&]{8,}$';

    if (this.NIF) {
      this.form = this.fb.group({
        nif: ['', [Validators.required, Validators.pattern(regexNIF)]],
        password: [
          '',
          [Validators.required, Validators.pattern(regexPassword)],
        ],
      });
    } else {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(regexEmail)]],
        password: [
          '',
          [Validators.required, Validators.pattern(regexPassword)],
        ],
      });
    }
    // NOTE: [def, [sync], [async]]
  }

  // before submit
  send(): void {
    // on submit
    if (this.form.valid) {
      console.log(
        '[disable.console.log in production] -> SUBMITING to API REST...'
        // this.form.value
      );

      this.loginService.postOne(this.form.value).subscribe(
        (user) =>
          console.log('[disable.console.log in production] -> POSTED: ', user)
        // TODO: POST + modal if API REST response !== 200
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
}
