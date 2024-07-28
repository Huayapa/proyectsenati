import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from '../models/users.models';

@Injectable({
  providedIn: 'root'
})
export class BdusersService {
  private http = inject(HttpClient);
  constructor() {
    this.http.get("https://api.escuelajs.co/api/v1/products").subscribe(res => {
      console.log(res);
    })
  }

  getUsers() {
    return this.http.get("http://localhost/proyectsenati/ProyectGroupFormAngular/src/database/peticiontable.php");
  }

}

//ir a app config para añadir importProvidersFrom