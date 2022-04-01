import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { City } from '../../model/city';
import { User } from '../../model/user';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted: boolean = false;
  isLoading: boolean = false;
  cities!: string[];

  selectedCity!: City;
  cpassword!:string;
  items:MenuItem[] = [];
  logo!: string;
  

  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder, 
    private userService:UserService, private messageService: MessageService,
    private route: Router
    ){
    this.cities = ["Coimbatore", "Bengaluru", "Chennai"];
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.registerForm = this.formBuilder.group({
      useremail: ["", [Validators.required]],
      userpassword: ["", [Validators.required, Validators.minLength(6)]],
      username: ["", [Validators.required, Validators.minLength(3)]],
      userphno: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      userCity: [this.selectedCity, [Validators.required]]
    })

    localStorage.clear()

    this.logo = '~/Users/kanishkar/Desktop/Angular Mini Project/cars360/src/assets/Cars360.png'

    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink:"/home"},
      {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink:"/login"},
      {label: 'Signup', icon: 'pi pi-fw pi-user-plus', routerLink:"/signup"}
    ];
  }

  get h(){
    return this.registerForm.controls;
  }

  onSubmit(user:User){
    this.isLoading = true;
    this.userService.userRegister(user).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.messageService.add({severity:'info', summary:'Register Successful', detail:""});
        this.onReset()
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({severity:'error', summary:'Registration Failed', detail:err.error.message});
        this.isLoading = false;
        this.onReset()
      }
    })    
  }
  onReset(){
    this.submitted = false;
    this.registerForm.reset()
  }
}
