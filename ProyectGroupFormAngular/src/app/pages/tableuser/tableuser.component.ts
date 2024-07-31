import { Component, inject, OnInit } from '@angular/core';
import { BdusersService } from '../../services/bdusers.service';
import { Iuser } from '../../models/users.models';

@Component({
  selector: 'app-table-user',
  standalone: true,
  imports: [],
  templateUrl: './tableuser.component.html',
  styleUrl: './tableuser.component.css'
})
export class TableuserComponent implements OnInit {
  //inyeccion de servicio
  public serviceUser = inject(BdusersService);
  //arreglo que almacenara las peticiones
  listUser: Iuser[] = [];
  //Esta funcion se activa cuando se implementa o ejecutar este componente
  ngOnInit(): void {
    //subscribir a el servicio para obtener el arreglo y ese arreglo lo guardaremos
    this.serviceUser.getUsers().subscribe(res => {
      res.forEach(el => {
        this.listUser.push(el);
      })
    })
  }
}