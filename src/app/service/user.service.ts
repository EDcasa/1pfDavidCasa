import { Injectable } from '@angular/core';
import { catchError, filter, from, map, of } from 'rxjs';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list:User[] =[
    {
      nombre:'',
      apellido:'',
      edad:1
    }
  ];
  constructor() { }

  obtenerUsuario(index:number):Promise<User>{
    return new Promise((resolve,reject)=>{
      const user = this.list[index];
      if(user){
          resolve(this.list[0])
      }
      reject({mensaje:'error'})
    })
  }


  obtenerUsuarioObservable(index:number){
    //off recbe objeto trabaja dentro del observable
    //from 
    return of(this.list).pipe(
      map((usuario)=>usuario[index]),
      catchError((error)=>{throw new Error(error)})
    )
  }

  upperCaseToIndex(index:number){

  }
}
