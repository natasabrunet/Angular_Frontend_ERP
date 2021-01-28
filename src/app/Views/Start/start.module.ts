import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './../../app-routing.module';



//import components
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

// services
import { HttpClientModule } from '@angular/common/http';
import { SignupService } from '../../Services/signup.service';
@NgModule({
  declarations: [RecoverPasswordComponent, LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SignupService],
  exports: [RecoverPasswordComponent, LoginComponent, SignUpComponent],
})
export class StartModule {}
