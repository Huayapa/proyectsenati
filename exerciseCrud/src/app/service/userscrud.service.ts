import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Ipersona, IaddPersona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
//Este servicio nos brindara la comunicacion con la base de datos por nedio de su dominio para acceder al arhivo correspondiente y poder hacer el CRUD
export class UserscrudService {
  //Inyectamos la clase httpclient para hacer peticiones a la base de datos
  private readonly http = inject(HttpClient);
  constructor() { }
  //dominio bd
  Url = "http://localhost/proyectsenati/exerciseCrud/src/app/database";

  //Retornar todos los usuarios✅
  getPersonas() {
    return this.http.get<Ipersona[]>(this.Url + "/getusers.php");
  }
  //Crear un nuevo usuario a la base de datos✅
  createPersona(persona:IaddPersona) {
    return this.http.post<IaddPersona>(this.Url + "/insertuser.php", persona)
  }
  //retorna o envia los datos del usuario por el id✅
  getPersonaId(id:number) {
    return this.http.get<Ipersona>(`${this.Url+"/getusersid.php"}/?id=${id}`)
  }
  //Actualiza valores de la url✅
  updatePersona(persona:Ipersona) {
    return this.http.put<Ipersona>(`${this.Url+"/updateuser.php"}/?id=${persona.id}`, persona)
  }
  //borrar un usuario a la base de datos✅
  deletePersona(persona:Ipersona) {
    return this.http.delete<Ipersona>(this.Url + "/deleteuser.php/?id="+ persona.id)
  }
}
