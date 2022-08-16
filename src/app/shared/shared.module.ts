import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadStyleDirective } from './directives/head-style.directive';
import { DisplayamePipe } from './pipes/displayame.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [    
    DisplayamePipe,
    HeadStyleDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class SharedModule { }
