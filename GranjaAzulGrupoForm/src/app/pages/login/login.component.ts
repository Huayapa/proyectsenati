import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { IloginUser } from '../../models/modelsuser';
import { UsersService } from '../../service/users.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterLink, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //Inyecto la clase para formulario y el servicio
  private readonly formBuilder = inject(FormBuilder);
  readonly Inyectusers = inject(UsersService);
  //Conecto el formulario con el formbuilder
  formUser = this.formBuilder.nonNullable.group({
    usuario: "",
    password: ""
  })
  //variable para saber si esta conectado
  isLogin:boolean | null = null;
  //Intentos disponibles antes de ser bloqueados
  intentLogin = 4;
  //Contador a mostrar 10s
  contLogin = 10;
  //funcion pora verificar el login
  verficiarLoginUser() {
    //Creo modelo de datos
    let verificarUser: IloginUser = {
      username: this.formUser.controls.usuario.value,
      password: this.formUser.controls.password.value
    }
    //Verificar que hayan valores en los datos para verificar el usuario
    if(verificarUser.username == "" || verificarUser.password == "") return;
    //Verificar que haya intentos disponibles
    if(this.intentLogin == 0) return;
    //enviar datos al servicio
    this.isLogin = this.Inyectusers.verificarUser(verificarUser);
    //Verificar que haya salido bien(si no ser restaran los intentos)
    if(this.isLogin == true) {
      this.intentLogin = 4;
      return;
    } else {
      this.intentLogin--;
    }
    //Verificar que haya intentos disponibles otra vez y si no hay intentos creara un temporizador
    if(this.intentLogin == 0) {
      let temporizador = setInterval(() => {
        this.contLogin--;
        if(this.contLogin == 0) {
          clearInterval(temporizador);
          this.intentLogin = 4;
          this.contLogin = 10
        }
      }, 1000);
    };
  }
  // users = this.Inyectusers.getUsers();
  //funcion para cerrar la modal
  cerrarModal() {
    this.isLogin = null;
  }
}
