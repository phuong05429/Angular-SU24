import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { Lab02Component } from './pages/lab02/lab02.component';
import { Lab03Component } from './pages/lab03/lab03.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { StarComponent } from './star/star.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductlistComponent,
    Lab02Component,
    Lab03Component,
    HomeComponent,
    ProductdetailComponent,
    StarComponent,
    DashboardComponent,
    ManageProductComponent,
    LoginComponent,
    PagesComponent,
    AuthComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
