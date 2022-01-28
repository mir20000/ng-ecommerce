import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPageRoutingModule } from './static-page-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { TopBannerComponent } from './about-us/top-banner/top-banner.component';
import { ProductPromiseComponent } from './about-us/product-promise/product-promise.component';
import { CustomerReviewComponent } from './about-us/customer-review/customer-review.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { TopBannerContactComponent } from './contact/top-banner-contact/top-banner-contact.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactComponent,
    BlogComponent,
    TopBannerComponent,
    ProductPromiseComponent,
    CustomerReviewComponent,
    ContactFormComponent,
    TopBannerContactComponent
  ],
  imports: [
    CommonModule,
    StaticPageRoutingModule
  ]
})
export class StaticPageModule { }
