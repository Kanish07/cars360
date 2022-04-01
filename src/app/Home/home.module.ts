import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { MyprimeModule } from '../shared/myprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService, SharedModule } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { NgNavbarResponsiveModule } from 'ng-navbar-responsive';

let homeRoute: Routes = [
  {path: "home", component: HomeComponent, pathMatch:'full'},
  {path: "login", component: SigninComponent},
  {path: "signup", component: RegisterComponent},
  {path:"", redirectTo: "home", pathMatch:'full'},
]

@NgModule({
  declarations: [
    NavbarComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, MyprimeModule, SharedModule, FontAwesomeModule, FormsModule, ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterModule.forChild(homeRoute), NgNavbarResponsiveModule
  ],
  exports: [
    NavbarComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class HomeModule { }
