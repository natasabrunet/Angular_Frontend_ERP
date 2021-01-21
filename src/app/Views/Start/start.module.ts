import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginRoutingModule } from './login/login.routes';

@NgModule({
  declarations: [RecoverPasswordComponent, LoginComponent, SignUpComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class StartModule {}
