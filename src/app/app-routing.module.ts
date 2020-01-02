import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyadsComponent } from './pages/myads/myads.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { RegisterComponent } from './forms/register/register.component';
import { LoginComponent } from './forms/login/login.component';
import { ForgotpasswordComponent } from './forms/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './forms/resetpassword/resetpassword.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'myads',component:MyadsComponent},
  {path:'inbox',component:InboxComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forms/forgotpassword',component:ForgotpasswordComponent},
 
  {path:'forms/register',component:RegisterComponent},
  {path:'forms/resetpassword',component:ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
