import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  public  URL_MAIN:string = environment.URL_API; 
  constructor(private http:HttpClient) { }


  getAlumnos(){

  }

  updateAlumno(id:number){

  }

  deactivateAlumno(){

  }

}
