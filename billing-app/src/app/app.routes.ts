import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Components/home/home.component';
import { BillingComponent } from './Components/billing/billing.component';
import { AddProductComponent } from './Components/add-product/add-product.component';

export const routes: Routes = [
    {
        path:'login', component:LoginComponent
    },
    {
        path:'',component:HomeComponent //,canActivate: [AuthGuard]
      },
      {
        path:'billing',component:BillingComponent
      },
      {
        path:'addproduct',component:AddProductComponent
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
  