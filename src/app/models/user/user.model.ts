/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 

  head: NodeUser | null =null;

  constructor(
    ...users:User[]
  ){

    users.forEach((element, index)=>{
      this.head = element;
    })
  }

  hasNext(){

  }
}
*/



export interface User{
  nombre:string;      
  apellido:string;
  edad:number;
}

/*
export class NodeUser{
  value:User;
  next: NodeUser | null;
  
  constructor(
    value:User, next: NodeUser | null
  ){

  }
}*/