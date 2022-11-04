import { Espacio } from '../models/Espacio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EspacioService {
  basePatch: string = environment.basePatch;
  constructor(private http: HttpClient) {}

  getEmployees(){
    return this.http.get<Espacio[]>(this.basePatch)
  }
  addEmployee(employee:Espacio){
    return this.http.post<Espacio>(this.basePatch, employee);
  }
  updateEmployee(id:any,employee:Espacio){
    return this.http.put<Espacio>(`${this.basePatch}/${id}`,employee)
  }


  deleteEmployee(id:any){
    return this.http.delete<Espacio>(`${this.basePatch}/${id}`)
  }
}
