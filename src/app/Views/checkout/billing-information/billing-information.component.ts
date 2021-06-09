import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Country, State } from 'src/app/Models/countries';
import { CountriesService } from '../../../Services/countries.service';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.scss']
})
export class BillingInformationComponent implements OnInit {
  // languages
  langs: string[] = [];

  billingForm: FormGroup;
  shipAddress:boolean;

  regexCIF = /^[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}$/;
  regexDNI: RegExp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
  regexDNICIF: RegExp = /^[0-9a-zA-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i  ;
  // i stands for insensitive for upper or lower
  regexEmail = /^[a-z0-9._%+-]+@[a-z0-9·-]+.[a-z]{2,4}$/;


  countryInfo: Country[] = [];
  provinceInfo: State[] = [];
  cityInfo: any[] = [];

  constructor( private fb: FormBuilder, private country: CountriesService, public appComponent: AppComponent) {
    this.createForm();
    this.langs = appComponent.langs;
  }

  ngOnInit(): void {
    this.getCountries();
  }

  createForm() {
    this.billingForm = this.fb.group({
      inputName: ['', [Validators.required, Validators.minLength(3)]],
      inputSurname: ['', [Validators.required, Validators.minLength(3)]],
      inputDNI: ['', [Validators.required, Validators.pattern(this.regexDNICIF)]],
      inputEmail: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      address: this.fb.group({
        inputAddress: ['', Validators.required],
        inputCity: ['', [Validators.required, Validators.minLength(2)]],
        inputCountry: ['', Validators.required],
        inputProvince: ['', Validators.required],
        inputZIP: ['', Validators.required],
      }),shippingAddress: this.fb.group({
        inputNameShipping: ['', [Validators.required, Validators.minLength(3)]],
        inputSurnameShipping: ['', [Validators.required, Validators.minLength(3)]],
        inputAddressShipping: ['', Validators.required],
        inputCityShipping: ['', [Validators.required, Validators.minLength(2)]],
        inputCountryShipping: ['', Validators.required],
        inputProvinceShipping: ['', Validators.required],
        inputZIPshipping: ['', Validators.required],
      }),
    })
  }

  onSubmit() {
    
  }

 isValidInput(name: string): boolean {
    const input: any = this.billingForm.get(name);
    return input.touched && input.invalid
  }

  getCountries() {
    this.country.allCountries().
      subscribe(
        data => {
          this.countryInfo = data.Countries;
        },
        err => console.log(err)
      )
  }

  onChangeCountry(inputCountry) {
    this.provinceInfo = this.countryInfo[inputCountry].States;
    this.cityInfo = this.provinceInfo[0].Cities;
  }

  onChangeProvince(inputProvince) {
    this.cityInfo = this.provinceInfo[inputProvince].Cities;
  }
  // change languages
changeLanguage(lang: string) {
  this.appComponent.changeLang(lang);
}
}

