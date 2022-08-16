import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './modules/alumnos/components/crear/crear.component';
import { ListarComponent } from './modules/alumnos/components/listar/listar.component';
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
  { path: 'listStudents', component: ListarComponent},
  { path: 'addStudent', component: CrearComponent},
  { path: 'auth', loadChildren: ()=> import('./modules/auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
