import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CityGuard } from './shared/city.guard';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgNavbarResponsiveModule } from 'ng-navbar-responsive';

// Define Route Mappings
let appRoutes:Routes = [
  {path: "", loadChildren: () => import("./Home/home.module").then((h) => h.HomeModule)},
  {path: "user", loadChildren: () => import("./user/user.module").then((u) => u.UserModule), canActivate:[AuthGuard]},
  {path:"**", component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes), SharedModule, BrowserModule,
    BrowserAnimationsModule,
    NgNavbarResponsiveModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
