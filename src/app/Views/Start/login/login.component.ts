import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, DoCheck {
  disabled = false;
  submitable = false;
  form: FormGroup;

  constructor(private fb: FormBuilder, private apiService: LoginService) {}
LoginService
  ngOnInit(): void {
    // TODO: modal after from sent and API token or body back
    this.createForm();
  }

  ngDoCheck(): void {
    // .btn style + form sendable or not
    this.submitable = this.form.valid ? true : false;
  }

  // setup form
  createForm(): void {
    const regexEmail =
      '^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$';

    const regexPassword =
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])[a-zA-Z0-9@$!%*#?&]{8,}$';

    // FIXME: regex CIF
    const regexCIF = '^[a-zA-Z]{1}d{7}[a-zA-Z0-9]{1}$';

    this.form = this.fb.group({
      // [def, sync, async]
      email: ['', [Validators.required, Validators.pattern(regexEmail)]],
      password: ['', [Validators.required, Validators.pattern(regexPassword)]],
    });
  }

  // before submit
  send(): void {
    // on submit
    if (this.form.valid) {
      // FIXME: comment out console.log if fetch works
      console.log(
        '[disable.console.log in production] -> SUBMITING to API REST...',
        this.form.value
      );

      // POST
      this.LoginService.postOne(this.form.value).subscribe((user) =>
        console.log('[disable.console.log in production] -> POSTED: ', user)
      );

      // TODO: modal if API REST response !== 200

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
