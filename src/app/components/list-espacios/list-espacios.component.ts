import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Espacio } from 'src/app/models/Espacio';
import { EspacioService } from 'src/app/services/Espacio.service';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-list-espacios',
  templateUrl: './list-espacios.component.html',
  styleUrls: ['./list-espacios.component.css']
})
export class ListEspacioComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'category', 'date', 'status','actions'];
  dataSource = new MatTableDataSource<Espacio>();
  disableSelect = new FormControl(false);

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private EspacioService: EspacioService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmployees() {
    this.EspacioService.getEmployees().subscribe((data: Espacio[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
  }
  EliminarEspacio(id:number){
    this.EspacioService.deleteEmployee(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((e:Espacio)=>{
        return e.id!=id?e:false
      })
    })
  }
  ActualizarEspacio(id:number){

  }
}


