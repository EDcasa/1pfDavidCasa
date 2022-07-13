import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { CrearComponent } from './components/crear/crear.component';
import { ListarComponent } from './components/listar/listar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    ActualizarComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ]
})
export class AlumnosModule { }
