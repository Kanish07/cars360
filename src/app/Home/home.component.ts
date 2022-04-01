import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public car = faCar as IconProp

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    if(this.auth.IsLoggedIn()){
      this.router.navigateByUrl('/user/home')
    }
  }

}
