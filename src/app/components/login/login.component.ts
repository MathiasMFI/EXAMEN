import {Component,  EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!:FormGroup;
  validateForm: FormGroup;
  message: string = ''

  @Output() onSubmit: EventEmitter<Login> = new EventEmitter<Login>();
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private snackBar:MatSnackBar
  ) {
      this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      remember: [null]
      }) 
    }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.maxLength(20)]]
    })
  }
  /*saveRegister():void{
    const login: Login={
      name: this.myForm.get('name')?.value,
      email: this.myForm.get('email')?.value,
      phone: this.myForm.get('phone')?.value,
      password: this.myForm.get('password')?.value,
      id: 0
    }
    this.registerService.addRegister(register)
    .subscribe({
      next: (data)=>{
        this.snackBar.open("Registro OK", '', {
          duration:3000
        })
        console.log("Exitooooo");
        this.router.navigate(['/login'])
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }*/
  
}


