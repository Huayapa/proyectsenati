
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BdusersService } from '../../services/bdusers.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';//Formulario
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //inyeccion
  private router = inject(Router); //Para el redireccionamiento a la tabla
  private servicebd = inject(BdusersService); //Para la peticion
  //almacenar la respuesta de la peticion
  datosUser: any;
  //Obtener datos de formulario
  formGroupLogin = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });
  //evento de click
  toSuccess() {
    //me subscribo a la base de datos para obtener una respuesta
    this.servicebd.verificarUser(this.formGroupLogin.value).subscribe(res => {
      this.datosUser = res;
      //verficar si en la respuesta hubo datos
      if(this.datosUser[0] === 1) {
        alert("Ingresado Correctamente");
        //redireccion
        this.router.navigateByUrl("/table");
      } else {
        alert("Usted no ingreso los datos validos");
      }
    })
  }
}
