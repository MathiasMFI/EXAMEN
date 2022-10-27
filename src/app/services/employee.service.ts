import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  basePatch: string = environment.basePatch;
  constructor(private http: HttpClient) {}

  getEmployees(){
    return this.http.get<Employee[]>(this.basePatch)
  }
  addEmployee(employee:Employee){
    return this.http.post<Employee>(this.basePatch, employee);
  }
  updateEmployee(id:any,employee:Employee){
    return this.http.put<Employee>(`${this.basePatch}/${id}`,employee)
  }


  deleteEmployee(id:any){
    return this.http.delete<Employee>(`${this.basePatch}/${id}`)
  }
}
