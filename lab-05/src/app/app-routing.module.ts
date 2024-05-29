import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lab02Component } from './pages/lab02/lab02.component';
import { Lab03Component } from './pages/lab03/lab03.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'productlist',
    component: ProductlistComponent,
  },
  {
    path: 'product/:id',
    component: ProductdetailComponent,
  },
  {
    path: 'admin',
    children: [
      // {
      //   path: 'login',
      //   component: LoginComponent,
      // },
      {
        path: 'product',
        component: ManageProductComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
