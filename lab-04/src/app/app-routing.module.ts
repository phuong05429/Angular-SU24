import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lab02Component } from './pages/lab02/lab02.component';
import { Lab03Component } from './pages/lab03/lab03.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'productlist',
    component: ProductlistComponent,
  },
  {
    path: 'productlist',

    children: [
      {
        path: 'product/:id',
        component: ProductdetailComponent,
      },
      
    ],
  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
