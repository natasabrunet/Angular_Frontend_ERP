import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoverPasswordComponent } from '../app/Views/Start/recover-password/recover-password.component';

const routes: Routes = [
  { path: 'recover-password', component: RecoverPasswordComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
