import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//import components
import { NewClientComponent } from './new-client/new-client.component';

// services
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [NewClientComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NewClientComponent],
})
export class ClientModule {   }
