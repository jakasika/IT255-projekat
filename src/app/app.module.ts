import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from "./shared/services/auth.service";
import { HomeComponent } from './components/user/home/home.component';
import { ProductsComponent } from './components/user/products/products.component';
import { ShoppingCartComponent } from './components/user/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/user/check-out/check-out.component';
import { OrderSuccessComponent } from './components/user/order-success/order-success.component';
import { MyOrdersComponent } from './components/user/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './shared/services/user.service';
import { AdminAuthGuard } from './shared/guard/admin-auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [
    AuthService, 
    UserService,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
