import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Car } from 'src/app/model/car';
import { City } from 'src/app/model/city';
import { CarService } from 'src/app/shared/car.service';

@Component({
  selector: 'app-user-car-upload',
  templateUrl: './user-car-upload.component.html',
  styleUrls: ['./user-car-upload.component.css']
})
export class UserCarUploadComponent implements OnInit {
  cities!: string[];
  shift!: string[];
  type!: string[];
  registerCarForm!: FormGroup;
  submitted: boolean = false;
  isLoading: boolean = false;
  selectedCity!: City;
  shiftType!: string;
  carType!: string;
  id = localStorage.getItem('id') as string;
  fuel: string[];
  carfuel!: string;

  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder, 
    private carService:CarService, private messageService: MessageService,
    private route: Router) { 
      this.cities = ["Coimbatore", "Bengaluru", "Chennai"];
      this.shift = ["Mannual", "Automatic"];
      this.type = ["Sedan", "Hatchback", "SUV"];
      this.fuel = ["Petrol", "Diesel", "Electric"]
    }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.registerCarForm = this.formBuilder.group({
      carmake: ["", [Validators.required, Validators.minLength(3)]],
      carmodelname: ["", [Validators.required, Validators.minLength(3)]],
      carshifttype: [this.shiftType, [Validators.required]],
      cartype: [this.carType, [Validators.required]],
      carcity: [this.selectedCity, [Validators.required]],
      carfuel: [this.carfuel, [Validators.required]],
      carprice: ["", [Validators.required, Validators.minLength(5)]],
      userid: [this.id]
    })
  }

  get h(){
    return this.registerCarForm.controls;
  }

  onSubmit(car: Car){
    this.carService.registerNewCar(car).subscribe({
      next: (data) => {
        this.messageService.add({severity:'success', summary:'Car Upload Successful', detail:""}) 
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
