import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Car } from 'src/app/model/car';
import { City } from 'src/app/model/city';
import { CarService } from 'src/app/shared/car.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  items: MenuItem[] = [{label: 'Home', routerLink: 'shfurf.com', icon: ''}];
  cities!: string[];
  myFormGroup!: FormGroup;
  selectedCity!: string;
  submitted: boolean = false;
  id:string = localStorage.getItem('id') as string;
  carList!:Car[];

  constructor(private formBuilder: FormBuilder, private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.cities = ["Coimbatore", "Bengaluru", "Chennai"];
    this.myFormGroup = this.formBuilder.group({
      userCity: [this.selectedCity, [Validators.required]]
    })
  }

  onGo(){
    localStorage.setItem('city', this.selectedCity)
    this.router.navigate(['/user/car'])
  }

  get h(){
    return this.myFormGroup.controls;
  }
}
