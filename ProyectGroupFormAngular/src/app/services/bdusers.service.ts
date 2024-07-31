import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from '../models/users.models';
import { Observable } from 'rxjs';

//Este es una clase o servicio "inyectable" que requerira una instancia de una clase
@Injectable({
  providedIn: 'root'
})

export class BdusersService {
  //Inyectar la clase HttpClient para usar sus metodos
  private http = inject(HttpClient);
  private urlDomain = "http://localhost/proyectsenati/ProyectGroupFormAngular/src/app/database";
  //configuracion para habilitar los CORS
  header = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
    "Access-Control-Allow-Headers": "origin, x-requested-with",
  })
  
  constructor() {}
  //Solicitar los datos del siguiente ruta (PHP)
  getUsers() {
    return this.http.get<Iuser[]>(`${this.urlDomain}/peticiontabla.php`);
  }
  //Enviar los datos para registrarlo (PHP)
  postUsers(jsonDatos: any) {
    return this.http.post<any>(`${this.urlDomain}/registraruser.php`, jsonDatos,{headers: this.header});
  }
  //Enviar los datos para loguear (PHP)
  verificarUser(jsonDatos: any) {
    return this.http.post<any>(`${this.urlDomain}/verificaruser.php`, jsonDatos,{headers: this.header});
  }
  //Me dirijo a la pagina que usara estos datos

}

//ir a app config para añadir importProvidersFrom