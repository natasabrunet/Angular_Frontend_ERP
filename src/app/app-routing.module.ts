import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './Views/Page-not-found/page-not-found.component';
import { LicenceComponent } from './Components/Footer/licence/licence.component';
import { LoginComponent } from './Views/Start/login/login.component';
import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';
import { SignUpComponent } from './Views/Start/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'log-in', component: LoginComponent },
  { path: 'Licence', component: LicenceComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'pnf', component: PageNotFoundComponent },
  { path: 'log-in', component: LoginComponent },
  { path: '**', component: LoginComponent }, // when wrong URL => go to login OR homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
