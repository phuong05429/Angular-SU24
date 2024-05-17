import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lab02Component } from './pages/lab02/lab02.component';
import { Lab03Component } from './pages/lab03/lab03.component';
import { ProductlistComponent } from './productlist/productlist.component';



const routes: Routes = [
  {
    path: '',
   component: ProductlistComponent,

  },
  {
    path: 'lab02',
    component: Lab02Component,
  },
  {
    path: 'lab03',
    component: Lab03Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
