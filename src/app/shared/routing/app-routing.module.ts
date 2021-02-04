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
import { AdminAuthGuard } from '../guard/admin-auth.guard';
import { ProductFormComponent } from 'src/app/admin/product-form/product-form.component';
import { AddStudentComponent } from 'src/app/add-student/add-student.component';
import { EditStudentComponent } from 'src/app/edit-student/edit-student.component';
import { StudentListComponent } from 'src/app/student-list/student-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },

  // { path: '', redirectTo: '/register-student', pathMatch: 'full' },
  { path: 'register-student', component: AddStudentComponent, canActivate: [AuthGuard] },
  { path: 'view-students', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'edit-student/:id', component: EditStudentComponent, canActivate: [AuthGuard] }

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
