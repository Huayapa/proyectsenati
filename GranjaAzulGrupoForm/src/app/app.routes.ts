import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';

export const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: MainComponent},
  {path: "recover", component: RecoverComponent},
  {path: "register", component: RegisterComponent},
  {path: "", redirectTo: "home", pathMatch:"full"},
  {path: "**", redirectTo: "/home"},
];
