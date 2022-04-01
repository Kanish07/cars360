import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyprimeModule } from './myprime.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    MyprimeModule,
    HttpClientModule
  ],
  exports: [
    NotFoundComponent,
  ]
})
export class SharedModule { }
