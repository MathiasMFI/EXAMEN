import {Component,  EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm!:FormGroup;
  validateForm: FormGroup;
  message: string = ''

  @Output() onSubmit: EventEmitter<Register> = new EventEmitter<Register>();
  constructor(
    private fb:FormBuilder,
    private registerService:RegisterService,
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
      name:['',[Validators.required, Validators.maxLength(10)]],
      email:['',[Validators.required, Validators.email]],
      phone:['',[Validators.required]],
      password:['',[Validators.required,Validators.maxLength(20)]]
    })
  }
  saveRegister():void{
    const register: Register={
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
  }
  
}


