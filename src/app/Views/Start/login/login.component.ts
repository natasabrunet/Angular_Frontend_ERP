import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from 'src/app/Services/login.service';
import { I_logedUser } from 'src/app/Models/logedUser';
import { I_token } from 'src/app/Models/token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, DoCheck {
  form: FormGroup;
  disabled = false;
  submitable = false;
  msg = '';
  NIF = false;
  eye = false;
  server = false;
  showAlert = false;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {}

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
    // FIXME: BACKEND user <NIF|Email> is beyond (3-12) chars range
    const regexEmail = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';

    const regexNIF =
      '^([ABCDEFGHJNPQRSUVW|abcdefghjnpqrsuvw])[\\d]{7}(\\w|\\d)$';

    const regexPassword =
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ñÑçÇºª\\\\*+-/?{}[\\],.^|$=!():ºª"@·#~€%&¬/\'¿¡`¨´;_<>])[a-zA-Z0-9ñÑçÇºª\\\\*+-/?{}[\\],.^|$=!():ºª"@·#~€%&¬/\'¿¡`¨´;_<>]{8,}';

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

  // show/hide password
  toggleEye(eye: HTMLInputElement, password: HTMLInputElement) {
    this.eye = !this.eye;

    password.type = this.eye ? 'text' : 'password';

    if (this.eye) {
      eye.children[0].classList.remove('fa-eye-slash');
      eye.children[0].classList.add('fa-eye');
    } else {
      eye.children[0].classList.remove('fa-eye');
      eye.children[0].classList.add('fa-eye-slash');
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
          // API REST == 200 OK
          this.openSession(object.token); // save API res
          this.showAlert = true;
          this.server = true;
          this.msg = 'Form successfully submitted';
          console.log('Form successfully submited to REST API');

          // let alert show up and then redirect
          setTimeout(() => {
            this.showAlert = false; // alert OK
            this.server = false; // spinner out
            this.router.navigateByUrl(''); // redirect to Shell
          }, 2000);
        },
        (error) => {
          console.warn(error.message);
          //  API REST != 200
          this.showAlert = true; // alert ERROR
          this.server = false; // spinner out
          this.msg = 'Log In failed. Try again or go Sign Up';
          console.error('Log In failed. Try again or go Sign Up');
        }
      );

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

  // TODO: Remove in production!
  autoLogin() {
    const bodyTEST = {
      username: 'D3831093R',
      password: 'Dev@lop3rs',
    };
    // NOTE: This user works because it already exists in DB

    // Automatic Log In
    fetch('http://217.76.158.200:8080/api/login', {
      method: 'POST',
      body: JSON.stringify(bodyTEST),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res: any) => res.json())
      .then((object: I_token) => {
        // FIXME: interface update token + pipe response



        // API REST == 200 OK
        this.openSession(object.token); // save API res
        this.showAlert = true;
        this.server = true;
        this.msg = 'Form successfully submitted';
        console.log('Form automatically submited to REST API');

        setTimeout(() => {
          this.showAlert = false; // alert OK
          this.server = false; // spinner out
          this.router.navigateByUrl(''); // redirect to Shell
        }, 2000);
      })
      .catch((error) => console.error('DEV LOG IN error:', error));
  }

  openSession(APIres: string) {
    this.loginService.saveToken(APIres);
  }
}
