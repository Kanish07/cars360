import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';
import { Purchase } from '../model/purchase';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  getCarByCity(city:string, id:string){
    let url = `https://localhost:5000/api/Car/${id}/${city}`
    return this.httpClient.get<Car[]>(url);
  }

  carPurchase(carId: string, userId: string){
    let url = `https://localhost:5000/api/Purchase`
    return this.httpClient.post<Purchase>(url, {'carid': carId, 'userid': userId});
  }

  registerNewCar(car: Car){
    let url = 'https://localhost:5000/api/Car'
    return this.httpClient.post<Car>(url, car);
  }
}
