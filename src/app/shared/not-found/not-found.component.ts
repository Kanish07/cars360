import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  
  returnUrl(){
    if(this.auth.IsLoggedIn()){
      this.router.navigateByUrl('/user/home')
    } else {
      this.router.navigateByUrl('/home')
    }
  }

}
