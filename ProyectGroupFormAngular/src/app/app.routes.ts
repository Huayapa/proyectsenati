import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomePageComponent } from './pages/home-page.component';
import { TableuserComponent } from './pages/tableuser/tableuser.component';

/*Rutas definidas*/
//configuramos el app.config.ts
export const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "home", component: HomePageComponent},
  {path: "table", component: TableuserComponent},
  {path: "**", redirectTo: "/home", pathMatch: "full"} //la cantidad de la url que debe coincidir
];
