import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  @Input() items!: MenuItem[];

  name!: string;

  Active:string = "true";

  public menuss = faBars as IconProp

  public navbarCollapsed = true;

  constructor() {}

  openLink(){
    window.open("https://www.kovai.co/about-us")
  }

  ngOnInit(): void {

    this.name = localStorage.getItem('name') as string;

    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink:"/user/home"},  
      {label: 'CarUpload', icon: 'pi pi-fw pi-car', routerLink:"/user/carupload"},  
      {label: 'Profile', icon: 'pi pi-fw pi-user', routerLink:"/user/dashboard"},
      {label: 'Logout', icon: 'pi pi-fw pi-sign-out', routerLink:"/login"}
    ];
  }

}
