import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { translate } from '@angular/localize/src/translate';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.scss'],
})
export class ClientContactComponent implements OnInit {
  selectedOption: string = '';
  cliContactForm: FormGroup;
  submitted = false;
  // contactOptions: string[] = [
  //   'Información producto',
  //   'Proceso de compra',
  //   'Pago y facturación',
  //   'Envíos y devoluciones',
  //   'Ofertas',
  //   'Otra consulta',
  // ];
  langs: string[] = [];

  constructor(public appComponent: AppComponent, private fb: FormBuilder) {
    this.langs = appComponent.langs;
    this.createForm();
  }
  createForm() {
    this.cliContactForm = this.fb.group({
      inputSelect: ['', [Validators.required]],
      inputSubject: ['', [Validators.required, Validators.minLength(2)]],
      inputMessage: ['', [Validators.required, Validators.maxLength(500)]],
      inputPrivacy: ['false', [Validators.required, Validators.requiredTrue]],
    });
  }
  isValidInput(name: string): boolean {
    const input: any = this.cliContactForm.get(name);
    return input.touched && input.invalid;
  }
  showSelected() {}

  ngOnInit(): void {}

  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
  }

  clientSubmit() {
    this.submitted = true;
    let myFormData = new FormData();
  }
}
