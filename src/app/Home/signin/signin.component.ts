import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  logInForm!: FormGroup;
  submitted: boolean = false;
  isLoading: boolean = false;

  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder, private userService:UserService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.logInForm = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })

    localStorage.clear()

  }

  get h(){
    return this.logInForm.controls;
  }

  onSubmit(user:User){
    this.isLoading = true;
    this.userService.userLogin(user).subscribe({
      next: (data) => {
        this.isLoading = false;
        localStorage.setItem("id", data.id)
        localStorage.setItem("token", data.token)
        localStorage.setItem("name", data.username)
        localStorage.setItem("role", data.role.toString())
        this.messageService.add({severity:'info', summary:'Login Successful', detail:""});
        this.router.navigate(['user/home'], {replaceUrl: true})
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({severity:'error', summary:'Login Failed', detail:err.error.message});
        this.isLoading = false;
        this.onReset()
      }
    })
  }

  onReset(){
    this.submitted = false;
    this.logInForm.reset()
  }
  
}
