import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductIndexComponent } from './all-product/component/all-product-index/all-product-index.component';
import { CartMainComponent } from './cart/component/cart-main/cart-main.component';
import { CheckOutComponent } from './check-out/component/check-out/check-out.component';
import { SingleProductMainComponent } from './single-product/component/single-product-main/single-product-main.component';

const routes: Routes = [
  {path: 'all-product', component:AllProductIndexComponent},
  {path: 'product-info', component:SingleProductMainComponent},
  {path: 'cart', component:CartMainComponent},
  {path: 'checkout', component:CheckOutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
