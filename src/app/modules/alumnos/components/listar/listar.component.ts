import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { JsonPlaceHolder } from 'src/app/models/JsonPlaceHolder';
import { User } from 'src/app/models/user/user.model';
import { TareaService } from 'src/app/service/tarea.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit, OnDestroy {

  usuarioSeleccionado:User|null = null;
  error:{mensaje:string} | null = null;


  // displayedColumns: string[] = ['action','nombreapellido', 'nombre', 'apellido', 'edad'];
  displayedColumns: string[] = ['userId','id', 'title', 'body'];
  

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

  listPromise:any;
  listPromiseAux:any;
  listObservable$:Observable<JsonPlaceHolder>[] =[];
  suscriptions:Subscription = new Subscription();
  constructor(
    private userService:UserService,
    private sTarea:TareaService,
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

    ///Consumo de promise
    this.sTarea.getPromiseJsonPlaceHolder().then(data=>{
      this.listPromise = data;
      this.listPromiseAux = data;
    }).catch(err=>{
      console.log(err);
    })

    ///Consumo de observable
    // this.listObservable$ = this.sTarea.getObservableJsonPlaceHolder();
      // this.sTarea.getObservableJsonPlaceHolder().subscribe({
      //   next: (data:JsonPlaceHolder)=>{
      //     this.listObservable = data;
      //   },
      //   error:(err:any)=>{
      //     console.log(err);
          
      //   }
      // })

      this.suscriptions.add(
        this.sTarea.getObservableJsonPlaceHolder().subscribe({
            next: (data:any)=>{
              this.listObservable$ = data;              
            },
            error:(err:any)=>{
              console.log(err);
              
            }
          })
      )
      

  }

  applyFilter(event: Event) {
    console.log("here");
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue)
    if(filterValue != ''){
      this.listPromise = this.sTarea.getFiltered(this.listPromiseAux,filterValue);
    }else{
      this.listPromise = this.listPromiseAux;
    }
    
}

  ngOnDestroy(){
    this.suscriptions.unsubscribe();
  }

}
