import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarPurchase } from '../model/carpurchase';
import { Token } from '../model/token';
import { User } from '../model/user';
import { UserProfile } from '../model/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  userLogin(user:User): Observable<Token>{
    let url = "https://localhost:5000/api/Account"
    return this.httpClient.post<Token>(url, user);
  }

  userRegister(user:User): Observable<User>{
    let url = "https://localhost:5000/api/User"
    return this.httpClient.post<User>(url, user);
  }

  getUserData(id: string): Observable<UserProfile>{
    let url = `https://localhost:5000/api/User/${id}`
    return this.httpClient.get<UserProfile>(url);
  }

  getUserPurchase(id: string): Observable<CarPurchase>{
    let url = `https://localhost:5000/api/User/PurchaseHistory/${id}`;
    return this.httpClient.get<CarPurchase>(url);
  }
}
