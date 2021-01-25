import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './Views/Start/sign-up/sign-up.component';
import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';
import { LoginComponent } from './Views/Start/login/login.component';

const routes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'recover-password', component: RecoverPasswordComponent},
  { path: 'log-in', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
