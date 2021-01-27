import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './../../app-routing.module';



=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './../../app-routing.module';

>>>>>>> b149f9909c85b1513177cac2933e4cf6758daf0a
//import components
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [RecoverPasswordComponent, LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
<<<<<<< HEAD
    AppRoutingModule
  ],
  exports: [
    RecoverPasswordComponent,
    LoginComponent,
    SignUpComponent
=======
    AppRoutingModule,
>>>>>>> b149f9909c85b1513177cac2933e4cf6758daf0a
  ],
  exports: [RecoverPasswordComponent, LoginComponent, SignUpComponent],
})
export class StartModule {}
