import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button"
import { MenubarModule } from "primeng/menubar"
import { InputTextModule } from "primeng/inputtext"
import { PasswordModule } from "primeng/password"
import { CardModule } from "primeng/card"
import { MenuModule } from "primeng/menu"
import { TableModule } from "primeng/table"
import { DialogModule } from "primeng/dialog"
import { InputNumberModule } from "primeng/inputnumber"
import { InputTextareaModule } from "primeng/inputtextarea"
import { ConfirmDialogModule } from "primeng/confirmdialog"
import { ToastModule } from "primeng/toast"
import { BadgeModule } from "primeng/badge"
import { SidebarModule } from "primeng/sidebar"
import { TabMenuModule } from "primeng/tabmenu"
import { ProgressBarModule } from "primeng/progressbar"
import { DropdownModule } from "primeng/dropdown"
import {SkeletonModule} from 'primeng/skeleton';
import {TimelineModule} from 'primeng/timeline';
import {ScrollTopModule} from 'primeng/scrolltop';
import {ScrollPanelModule} from 'primeng/scrollpanel';


import { ConfirmationService, MessageService } from "primeng/api"
import { RippleModule } from "primeng/ripple";

@NgModule({
    exports: [ 
      ButtonModule, MenuModule, MenubarModule, InputTextModule, PasswordModule, CardModule, DialogModule,
      InputNumberModule, InputTextModule, InputTextareaModule, ConfirmDialogModule, ToastModule, BadgeModule, TableModule, 
      SidebarModule, TabMenuModule, RippleModule, ProgressBarModule, DropdownModule, SkeletonModule, TimelineModule,
      ScrollTopModule, ScrollPanelModule
    ],
    providers: [ ConfirmationService, MessageService ]
})
export class MyprimeModule { }
