import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './Views/Page-not-found/page-not-found.component';
import { LicenceComponent } from './Components/Footer/licence/licence.component';
import { LoginComponent } from './Views/Start/login/login.component';
import { RecoverPasswordComponent } from './Views/Start/recover-password/recover-password.component';
import { SignUpComponent } from './Views/Start/sign-up/sign-up.component';
import { ProductsListComponent } from './views/products-list/products-list.component';
import { SingleProductComponent } from './Views/Product/single-product/single-product.component';
import { AdminViewComponent } from './Views/Admin-view/admin-view.component';
// import { AdminViewComponent } from './Views/Admin-view/admin-view.component';

const routes: Routes = [
  // TODO: '' as LoginComponent to be substituded by 'HomeComponent'
  { path: '', component: LoginComponent },
  // pages
  { path: '404', component: PageNotFoundComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'licence', component: LicenceComponent },
  { path: 'products', component: ProductsListComponent },
  // developers views
  { path: 'dev/404', component: PageNotFoundComponent },
  { path: 'dev/log-in', component: LoginComponent },
  { path: 'dev/sign-up', component: SignUpComponent },
  { path: 'dev/recover-pass', component: RecoverPasswordComponent },
  { path: 'dev/licence', component: LicenceComponent },
  { path: 'dev/product-list', component: ProductsListComponent },
  { path: 'dev/single-product', component: SingleProductComponent },
  { path: 'dev/admin', component: AdminViewComponent },
  // Path ** MUST be always the last route
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
