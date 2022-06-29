import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarioSeleccionado:User|null = null;
  error:{mensaje:string} | null = null;


  displayedColumns: string[] = ['action','nombreapellido', 'nombre', 'apellido', 'edad'];
  
  


  list:User[]=[
    {
      nombre:'David',
      apellido:'Casa',
      edad:1
    },
    {
      nombre:'Pedro',
      apellido:'Endara',
      edad:10
    },
    {
      nombre:'Cris',
      apellido:'Ramirez',
      edad:20
    },
    {
      nombre:'Luis',
      apellido:'Ponce',
      edad:30
    },
    {
      nombre:'Emanuel',
      apellido:'Ruiz',
      edad:40
    }
  ]
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.userService.obtenerUsuario(0).then((user:User)=>{
        this.usuarioSeleccionado = user;
    }).catch(error=>{
      this.error = error;
    })


    this.userService.obtenerUsuarioObservable(0).subscribe(
      // next:(us)=>{
      //     this.usuarioSeleccionado = us;
      // }, error:(error)=>{
      // }
    )
  }

}
