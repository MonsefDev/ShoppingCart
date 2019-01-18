import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductsModule {
    product_id : string;
    product_img : string;
    product_name : string;
    product_price : number;
    product_details : string;
    product_quality : number;
 }
