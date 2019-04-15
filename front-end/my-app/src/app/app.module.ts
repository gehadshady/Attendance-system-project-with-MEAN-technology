import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './employee/register/register.component';
import { LoginComponent } from './employee/Login/login.component';
import { CofirmAttendComponent } from './employee/cofirm-attend/cofirm-attend.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './employee/profile/profile.component';

const appRoutes:Routes = [
  {path:'', component: LoginComponent},
  {path:'ConfirmAttendance', component: CofirmAttendComponent},
  {path:'register', component: RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CofirmAttendComponent,
    NavComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
