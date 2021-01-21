import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

// const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
  ],
})
export class LoginRoutingModule {}
