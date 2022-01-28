import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AllProductIndexComponent } from './all-product/component/all-product-index/all-product-index.component';
import { ItemDataComponent } from './all-product/component/item-data/item-data.component';
import { ShowProductSidebarsComponent } from './all-product/component/show-product-sidebars/show-product-sidebars.component';
import { TopBannerComponent } from './single-product/component/top-banner/top-banner.component';
import { RelatedProductsComponent } from './single-product/component/related-products/related-products.component';
import { ProductInfoComponent } from './single-product/component/product-info/product-info.component';
import { SingleProductMainComponent } from './single-product/component/single-product-main/single-product-main.component';
import { CartMainComponent } from './cart/component/cart-main/cart-main.component';
import { CartTopComponent } from './cart/component/cart-top/cart-top.component';
import { CartDataComponent } from './cart/component/cart-data/cart-data.component';
import { CheckOutComponent } from './check-out/component/check-out/check-out.component';


@NgModule({
  declarations: [
    AllProductIndexComponent,
    ItemDataComponent,
    ShowProductSidebarsComponent,
    TopBannerComponent,
    RelatedProductsComponent,
    ProductInfoComponent,
    SingleProductMainComponent,
    CartMainComponent,
    CartTopComponent,
    CartDataComponent,
    CheckOutComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
