import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../Services/login.service';
import { AbstractControl } from '@angular/forms';

interface I_login {
  username: AbstractControl;
  password: AbstractControl;
}

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

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    router: Router
  ) {}

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
    // FIXME: user <NIF|Email> has (3-12) chars
    const regexEmail = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';

    const regexNIF =
      '^([ABCDEFGHJNPQRSUVW|abcdefghjnpqrsuvw])[\\d]{7}(\\w|\\d)$';
    // NOTE: NIF vs. CIF => https://getquipu.com/blog/diferencia-entre-el-cif-y-el-nif/

    // FIXME: password has (8-12 chars)
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

      const body = this.form.value;

      this.loginService.loginUser(body).subscribe(
        (logedUser) =>
          console.log(
            '[disable.console.log in production] -> POSTED: ',
            logedUser
          )
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

  // FIXME: PROVISIONAL DIRECT LOGIN: Front and Back should have same patterns
  autoLogin() {
    // TODO: this user already exists in DB => http://217.76.158.200:8080/api/login
    const bodyTEST = {
      username: 'D3831093R',
      password: 'Dev@lop3rs',
    };

    fetch('http://217.76.158.200:8080/api/login', {
      method: 'POST',
      body: JSON.stringify(bodyTEST),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => console.log('Success:', response));
  }
}
