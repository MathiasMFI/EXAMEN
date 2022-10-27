import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private snackBar:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(40)]],
      date: ['', [Validators.required, Validators.maxLength(20)]],
      priority: ['', [Validators.required, Validators.maxLength(20)]],
      type: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  saveEmploye(): void {
    const employee: Employee = {
      id: 0,
      title: this.myForm.get('title')?.value,
      date: this.myForm.get('date')?.value,
      priority: this.myForm.get('priority')?.value,
      type: this.myForm.get('type')?.value,
    };

    this.employeeService.addEmployee(employee).subscribe({
      next: () => {
        this.snackBar.open("Registro OK",'',{
          duration:3000,
        })
        this.router.navigate(['/employees']);
      },
      error: () => {},
    });
  }
}
