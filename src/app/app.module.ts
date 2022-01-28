import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './main/index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TopBannerComponent } from './main/top-banner/top-banner.component';
import { CompanyPromiseComponent } from './main/company-promise/company-promise.component';
import { BestSellerComponent } from './main/best-seller/best-seller.component';
import { DisplayCollectionComponent } from './main/display-collection/display-collection.component';
import { ProductComponent } from './main/product/product.component';
import { CustomerReviewComponent } from './main/customer-review/customer-review.component';
import { StaticPageModule } from './static-page/static-page.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    TopBannerComponent,
    CompanyPromiseComponent,
    BestSellerComponent,
    DisplayCollectionComponent,
    ProductComponent,
    CustomerReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaticPageModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
