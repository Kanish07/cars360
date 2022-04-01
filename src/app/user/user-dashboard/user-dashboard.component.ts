import { Component, OnInit } from '@angular/core';
import { CarPurchase } from 'src/app/model/carpurchase';
import { UserProfile } from 'src/app/model/userProfile';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userDetails!: UserProfile;
  carDetails!: CarPurchase[];
  id:string = localStorage.getItem('id') as string
  name!:string;
  display: boolean = false;

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.getUserData(this.id).subscribe({
      next: (data) => {
        this.userDetails = data['data' as keyof Object] as unknown as UserProfile;
        this.name = this.userDetails.username;
      },
      error: (err) => {
        console.log(err);
      }
    })

    this.userService.getUserPurchase(this.id).subscribe({
      next: (data) => {
        this.carDetails = data['data' as keyof Object] as unknown as CarPurchase[];
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  showDialog() {
    this.display = true;
  }
}
