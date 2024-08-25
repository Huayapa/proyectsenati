import { Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListarComponent } from './pages/listar/listar.component';

//definimos las rutas

export const routes: Routes = [
  {path: "add", component: AddComponent},
  {path: "edit", component: EditComponent},
  {path: "listar", component: ListarComponent},
  {path: "", redirectTo: "/listar", pathMatch: "full"},
  {path: "**", redirectTo: "/listar", pathMatch: "full"},
];
