import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetalis/productdetalis.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }