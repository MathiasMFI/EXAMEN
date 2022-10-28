import { Register} from './../models/register';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  basePatch: string = environment.basePatch;
  constructor(private http: HttpClient) {}

  getRegister(){
    return this.http.get<Register[]>(this.basePatch)
  }
  addRegister(register:Register){
    return this.http.post<Register>(this.basePatch, register);
  }
  updateRegister(id:any,register:Register){
    return this.http.put<Register>(`${this.basePatch}/${id}`,register)
  }


  deleteRegister(id:any){
    return this.http.delete<Register>(`${this.basePatch}/${id}`)
  }
}
