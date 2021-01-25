import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';
import { SignUpComponent } from './Views/Start/sign-up/sign-up.component';
import { LicenceComponent } from './Components/Footer/licence/licence.component';

// we'll use convention "part-part" for slugs
const routes: Routes = [
  {path: 'recover-password', component: RecoverPasswordComponent},
  {path:'sign_up', component:SignUpComponent},
  {path: 'Licence', component: LicenceComponent},
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
];
   
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
