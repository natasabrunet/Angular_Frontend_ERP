import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './Views/Page-not-found/page-not-found.component';
import { LicenceComponent } from './Components/Footer/licence/licence.component';
import { LoginComponent } from './Views/Start/login/login.component';
import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';
import { SignUpComponent } from './Views/Start/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'log-in', component: LoginComponent },
  { path: 'licence', component: LicenceComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '404', component: PageNotFoundComponent },
  // the last two lines:
  { path: '', redirectTo: '/log-in', pathMatch: 'full' }, // homepage
  { path: '**', redirectTo: '/404', pathMatch: 'full' } // this must be the last line!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
