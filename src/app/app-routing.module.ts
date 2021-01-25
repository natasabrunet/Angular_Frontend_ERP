import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';
import { SignUpComponent } from './Views/Start/sign-up/sign-up.component';

import { PageNotFoundComponent} from './Views/Page-not-found/page-not-found.component';
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';

import { LicenceComponent } from './Components/Footer/licence/licence.component';

// we'll use convention "part-part" for slugs
const routes: Routes = [
  {path: 'recover-password', component: RecoverPasswordComponent},
  {path:'sign_up', component:SignUpComponent},
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
