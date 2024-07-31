import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BdusersService } from '../../services/bdusers.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  //inyeccion de servicio
  public serviceUser = inject(BdusersService);
  //Saber si esta registrado
  IsRegist = "noRegister";
  //form group, formControl para obtener los datos del formulario
  formGroupRegister = new FormGroup({
    name: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });
  //funcion para registrar usuario
  clickRegist():void {
    //Suscribirse pasandole como argumento los valores del formulario
    this.serviceUser.postUsers(this.formGroupRegister.value).subscribe(res => {
      //Si el dato es correcto avisara que todo esta bien
      if(res == 1) {
        this.IsRegist = "Register";
        alert("registrado");
      } else {
        alert("No se pudo registrar");
        this.IsRegist = "errorRegister";
      }
    })
  }
  //se activa para cerrar la ventana
  btnClose():void {
    this.IsRegist = "noRegister";
  }
}
