import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Import all the components for which navigation service has to be activated 
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { AuthGuard } from "../../shared/guard/auth.guard";
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';
import { HomeComponent } from 'src/app/components/user/home/home.component';
import { ProductsComponent } from 'src/app/components/user/products/products.component';
import { ShoppingCartComponent } from 'src/app/components/user/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from 'src/app/components/user/check-out/check-out.component';
import { OrderSuccessComponent } from 'src/app/components/user/order-success/order-success.component';
import { AdminProductsComponent } from 'src/app/components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from 'src/app/components/admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from 'src/app/components/user/my-orders/my-orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'my/orders', component: MyOrdersComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
