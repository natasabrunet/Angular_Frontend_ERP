import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './Views/Page-not-found/page-not-found.component';
import { LicenceComponent } from './Components/Footer/licence/licence.component';
import { LoginComponent } from './Views/Start/login/login.component';
import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';
import { SignUpComponent } from './Views/Start/sign-up/sign-up.component';
import { ProductsListComponent } from './views/product/products-list/products-list.component';
import { SingleProductComponent } from './Views/Product/single-product/single-product.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, // TODO: to be substituded by 'home'
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'licence', component: LicenceComponent }, 
  { path: 'products', component: ProductsListComponent },
  { path: 'single-product/:id', component: SingleProductComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // USE 'redirectTo' here :)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
