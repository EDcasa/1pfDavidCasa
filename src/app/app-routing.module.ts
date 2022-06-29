import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './components/alumnos/crear/crear.component';
import { ListarComponent } from './components/alumnos/listar/listar.component';

const routes: Routes = [
  { path: 'listStudents', component: ListarComponent},
  { path: 'addStudent', component: CrearComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
