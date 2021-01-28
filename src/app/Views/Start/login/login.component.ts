import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from 'src/app/Services/login.service';
import { I_logedUser } from 'src/app/Models/logedUser';
import { I_token } from 'src/app/Models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, DoCheck {
  form: FormGroup;
  disabled = false;
  submitable = false;
  NIF = false;
  token: string; // FIXME: remove in production

  constructor(private loginService: LoginService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngDoCheck(): void {
    this.submitable = this.form.valid ? true : false; // .btn style + button@submit disabled
  }

  toggleNIF() {
    this.NIF = !this.NIF; //rebuild form with current NIF | email
    this.createForm();
  }
  // setup form
  createForm(): void {
    // FIXME: BACKEND user <NIF|Email> has (3-12) chars
    const regexEmail = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';

    const regexNIF =
      '^([ABCDEFGHJNPQRSUVW|abcdefghjnpqrsuvw])[\\d]{7}(\\w|\\d)$';

    // FIXME: BACKEND password has (8-12 chars)
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

  // on submit
  send(): void {
    if (this.form.valid) {
      let body = {
        password: this.form.value['password'],
      };

      // dynamics props
      if (this.form.value['email']) {
        body['username'] = this.form.value['email'];
      }
      if (this.form.value['nif']) {
        body['username'] = this.form.value['nif'];
      }

      this.loginService.loginUser(<I_logedUser>body).subscribe(
        (object: I_token) => {
          this.token = object.token;
          console.log('Form submited to REST API');
        },
        (error) => console.warn('oops', error.message)
      );

      // TODO: POST + modal if API REST response !== 200

      // then... clean form
      this.form.reset();
      this.disabled = false; // !.btn-erp-red
    } else {
      this.disabled = true; // .btn-erp-red
      return Object.values(this.form.controls).forEach(
        (control) => control.markAsTouched() // reset values
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

  // FIXME: Remove in production! - PROVISIONAL DIRECT LOGIN
  autoLogin() {
    const bodyTEST = {
      username: 'D3831093R',
      password: 'Dev@lop3rs',
    };
    // This user already exists in DB => http://217.76.158.200:8080/api/login

    fetch('http://217.76.158.200:8080/api/login', {
      method: 'POST',
      body: JSON.stringify(bodyTEST),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res: any) => res.json())
      .then((token: I_token) => {
        this.token = token.token;
        console.log('Form  submited to REST API automatically');
      })
      .catch((error) => console.error('Error:', error));
  }
}
