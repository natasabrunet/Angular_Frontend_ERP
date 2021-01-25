import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './Views/Start/sign-up/sign-up.component';

import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';
import { LoginComponent } from './Views/Start/login/login.component';


import { PageNotFoundComponent} from './Views/Page-not-found/page-not-found.component';
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';
import { LicenceComponent } from './Components/Footer/licence/licence.component';


const routes: Routes = [
  { path: 'log-in', component: LoginComponent },
  {path: 'Licence', component: LicenceComponent},
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  // { path: '**', component: PageNotFoundComponent}, <- WILDCARD
  { path: 'pnf', component: PageNotFoundComponent} // when we'll have the homepage we'll use the WILDCARD
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
