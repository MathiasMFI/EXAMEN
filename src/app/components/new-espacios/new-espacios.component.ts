import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Espacio } from 'src/app/models/Espacio';
import { EspacioService } from 'src/app/services/Espacio.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-new-espacios',
  templateUrl: './new-espacios.component.html',
  styleUrls: ['./new-espacios.component.css']
})
export class NewEspaciosComponent implements OnInit {
  myForm!: FormGroup;
  disableSelect = new FormControl(false);
  constructor(
    private fb: FormBuilder,
    private EspacioService: EspacioService,
    private router: Router,
    private snackBar:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  GuardarEspacio(): void {
    const Espacio: Espacio = {
      id: 0,
      Estacionamiento: this.myForm.get('title')?.value,
      Piso: this.myForm.get('description')?.value,
      Numero:this.myForm.get('date')?.value,
      Estado:this.myForm.get('status')?.value,
    };

    this.EspacioService.addEmployee(Espacio).subscribe({
      next: () => {
        this.snackBar.open("Registro OK",'',{
          duration:3000,
        })
        this.router.navigate(['/Espacio']);
      },
      error: () => {},
    });
  }
}


