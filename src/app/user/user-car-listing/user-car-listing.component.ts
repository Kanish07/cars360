import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/shared/car.service';

@Component({
  selector: 'app-user-car-listing',
  templateUrl: './user-car-listing.component.html',
  styleUrls: ['./user-car-listing.component.css']
})
export class UserCarListingComponent implements OnInit {
  
  selectedCity: string = localStorage.getItem('city') as string;
  id: string = localStorage.getItem('id') as string;
  carList:Car[] = [];
  isLoading:boolean = false;

  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllCar()
  }

  onBuy(carId:string){
    this.carService.carPurchase(carId, this.id).subscribe({
      next: (data) => {
        this.messageService.add({severity:'success', summary:'Car Purchased', detail:""});
        this.getAllCar()
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  getAllCar(){
    this.isLoading = true
    this.carService.getCarByCity(this.selectedCity, this.id).subscribe({
      next: (data) => {
        console.log(data);
        if(data !== null){
          this.carList = data['data' as keyof Object] as unknown as Car[];
        }
        this.isLoading = false
      },
      error: (err) => {
        this.isLoading = false
        console.log(err);
      }
    });
  }

}
