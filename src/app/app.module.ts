import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './forms/register/register.component';
import { LoginComponent } from './forms/login/login.component';
import { ForgotpasswordComponent } from './forms/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './forms/resetpassword/resetpassword.component';
import { HomeComponent } from './pages/home/home.component';
import { AdComponent } from './pages/ad/ad.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { MyadsComponent } from './pages/myads/myads.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    HomeComponent,
    AdComponent,
    InboxComponent,
    MyadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
