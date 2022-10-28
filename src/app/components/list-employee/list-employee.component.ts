import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'category', 'date', 'status','actions'];
  dataSource = new MatTableDataSource<Employee>();
  disableSelect = new FormControl(false);

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((e:Employee)=>{
        return e.id!=id?e:false
      })
    })
  }
  updateEmployee(id:number){

  }
}


