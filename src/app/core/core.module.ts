import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosModule } from '../modules/alumnos/alumnos.module';
import { AuthModule } from '../modules/auth/auth.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlumnosModule,
    AuthModule
  ],
  exports:[
    AlumnosModule
  ]
})
export class CoreModule { }
