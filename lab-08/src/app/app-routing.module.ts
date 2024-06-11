import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lab02Component } from './pages/lab02/lab02.component';
import { Lab03Component } from './pages/lab03/lab03.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UnitComponent } from './pages/unit/unit.component';



const routes: Routes = [
  {
    path: '',
    component: UnitComponent,

  },
  {
    path: 'lab02',
    component: Lab02Component,
  },
  {
    path: 'lab03',
    component: Lab03Component,
  },
  {
    path: 'unit',
    component: UnitComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }