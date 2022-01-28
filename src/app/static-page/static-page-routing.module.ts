import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPageRoutingModule { }
