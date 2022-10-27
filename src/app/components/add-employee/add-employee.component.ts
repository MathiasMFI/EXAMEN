import { EmployeeService } from 'src/app/services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import {  Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  myForm!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      title:['',[Validators.required, Validators.maxLength(30)]],
      date:['',[Validators.required]],
      type:['',[Validators.required]],
      description:['',[Validators.maxLength(100)]]
    })
  }
  saveEmployee():void{
    const employee: Employee={
      title: this.myForm.get('title')?.value,
      date: this.myForm.get('date')?.value,
      description: this.myForm.get('description')?.value,
      type: this.myForm.get('type')?.value,
      id: 0
    }
    this.employeeService.addEmployee(employee)
    .subscribe({
      next: (data)=>{
        this.snackBar.open("Registro OK", '', {
          duration:3000
        })
        console.log("Exitooooo");
        this.router.navigate(['/employee'])
      },
      error: (error)=>{
        console.log(error)
      }
    })
    
  }

}
