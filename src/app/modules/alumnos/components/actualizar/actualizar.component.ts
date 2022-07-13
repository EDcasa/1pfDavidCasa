import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  formStudent!: FormGroup;
  submitted = false;
  
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formStudent = this.fb.group({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    
  }
}
