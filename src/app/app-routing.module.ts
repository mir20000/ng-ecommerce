import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './main/index/index.component';

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" ,component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
