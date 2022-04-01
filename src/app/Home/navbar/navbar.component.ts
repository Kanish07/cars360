import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  Active:string = "true";

  public menuss = faBars as IconProp

  public navbarCollapsed = true;

  constructor() {}

  openLink(){
    window.open("https://www.kovai.co/about-us")
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink:"/home"},
      {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink:"/login"},
      {label: 'Register', icon: 'pi pi-fw pi-user-plus', routerLink:"/signup"}
  ];
  }
}
