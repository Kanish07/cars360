import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserCarListingComponent } from './user-car-listing/user-car-listing.component';
import { SharedModule } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyprimeModule } from '../shared/myprime.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxJdenticonModule } from 'ngx-jdenticon';
import { CityGuard } from '../shared/city.guard';
import { AuthGuard } from '../shared/auth.guard';
import { UserCarUploadComponent } from './user-car-upload/user-car-upload.component';

let userRoute: Routes = [
  {path: "home", component: UserHomeComponent, canActivate: [AuthGuard]},
  {path: "dashboard", component: UserDashboardComponent, canActivate: [AuthGuard]},
  {path: "carupload", component: UserCarUploadComponent, canActivate: [AuthGuard]},
  {path: "car", component: UserCarListingComponent, canActivate:[AuthGuard, CityGuard]}
]

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserHomeComponent,
    UserNavComponent,
    UserCarListingComponent,
    UserCarUploadComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(userRoute),
    FontAwesomeModule,
    MyprimeModule,
    NgxJdenticonModule,
    SharedModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  exports: [
    UserDashboardComponent,
    UserHomeComponent,
    UserCarListingComponent
  ]
})
export class UserModule { }
