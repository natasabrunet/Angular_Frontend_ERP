import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Countries } from 'src/app/Models/countries';
import { CountriesService } from '../../../Services/countries.service';





@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.scss']
})
export class BillingInformationComponent implements OnInit {

  countries: Countries [];

  
  constructor(private countriesService : CountriesService) { 
  }
  
  ngOnInit(): void {
    this.countriesService.allCountries().subscribe((res:Countries[]) => {this.countries = res; console.log(this.countries)}
    );

  }
  
}
