import { Injectable } from '@angular/core';
import { IloginUser, Irecover, Iuser } from '../models/modelsuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  /*Variable que alvergara los usuarios */
  usuarios: Iuser[] = [];
  
  constructor() { }

  /*fUNCIONES PARA USUARIOS (REGISTRO, VERIFICAR, MOSTRAR) */
  //Este metodo pedira el usuario que va registrar (almacenar en la variable usuarios)
  registUser(newUser: Iuser) {
    let isRegister:boolean = false;
    if(this.usuarios.push(newUser)){ 
      isRegister = true;
    } else {
      isRegister = false;
    }
    return isRegister;
  }
  //Esta funcion va devolver los valores de la variable usuarios
  getUsers() {
    return this.usuarios;
  }

  //Esta funcion recorrera los usuarios para condicionar que el usuario logueado sea correcto
  verificarUser(loginUser:IloginUser) {
    let isRecover:boolean = false;
    this.usuarios.forEach(user => {
      if(user.username == loginUser.username && user.password == loginUser.password) {
        isRecover = true;
      }
    })
    return isRecover;
  }
  
  //Esta funcion validara las opciones de la recuperacion de cuenta (Si se condiciona, retornara la contraseña)
  recuperarUser(recover: Irecover) {
    let getpassword = "";
    this.usuarios.forEach((user, indice) => {
      if(recover.username == user.username && recover.dateNac.toString() == user.dateNac.toString() && recover.genero ==  user.genero) {
        getpassword = this.usuarios[indice].password;
      }
    })
    return getpassword;
  }
}




