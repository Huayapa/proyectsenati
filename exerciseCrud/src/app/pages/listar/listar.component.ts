import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipersona } from '../../models/persona';
import { UserscrudService } from '../../service/userscrud.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [],
  templateUrl: './listar.component.html'
})
export class ListarComponent implements OnInit {
  //variable que almacenara todos los usuarios
  personas: Ipersona[] = [];
  isActiveModal:boolean = false;
  //inyectamos el servicio y la ruta
  private readonly httpService = inject(UserscrudService);
  private readonly route = inject(Router); 
  //Cuando inicie solitaremos todos los usuarios de la bd en ese momento y lo guardaremos
  ngOnInit(): void {
    this.httpService.getPersonas().subscribe(data => {
      this.personas = data;
    })
  }
  //Cuando se de a editar, el boton guardara por el localStorage el id para llamarlo en otro componente
  editar(persona: Ipersona):void {
    localStorage.setItem("id", persona.id.toString()); //almacenar localstorage
    this.route.navigate(["edit"]);
  }
  //cuando se borre, tomara el parametro al hacer clic y se dara una confirmacion antes
  delete(persona: Ipersona):void {
    let isDelete = confirm("desea borrar?");
    if(isDelete) {
      //si se borro correctamente se enviara una alerta y se filtrar la tabla para actualizarse
      this.httpService.deletePersona(persona).subscribe(() => {
        this.isActiveModal = true;
        this.personas = this.personas.filter(personas => personas !== persona);
      })
    }
  }

  cerrarModal() {
    this.isActiveModal = false;
  }
}
