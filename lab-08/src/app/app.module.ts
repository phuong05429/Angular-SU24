import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { Lab02Component } from './pages/lab02/lab02.component';
import { Lab03Component } from './pages/lab03/lab03.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { UnitComponent } from './pages/unit/unit.component';
import { CreateComponent } from './pages/unit/create/create.component';
import { DeleteComponent } from './pages/unit/delete/delete.component';
import { EditComponent } from './pages/unit/edit/edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from './@theme/component/paginator/paginator.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductlistComponent,
    Lab02Component,
    Lab03Component,
    UnitComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent,
    DialogContentComponent,
    PaginatorComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
