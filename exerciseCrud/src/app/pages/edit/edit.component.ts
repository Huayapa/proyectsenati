import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IaddPersona, Ipersona } from '../../models/persona';
import { UserscrudService } from '../../service/userscrud.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html'
})
export class EditComponent {
  //valor que tendra valores del usuario seleccionado para editar
  persona:Ipersona[] = [];
  isActiveModal:boolean = false;
  //Inyecto el servicio y las rutas
  private readonly formBuilder = inject(FormBuilder)
  private readonly httpService = inject(UserscrudService);
  private readonly route = inject(Router); 
  //Lo ejecuto cuando inicie el componente
  ngOnInit(): void {
    this.editar();
  }
  //formulario
   editForm = this.formBuilder.nonNullable.group({
    name : "",
    apellidos: "",
  })
  //tomara el id del localstorage y almacenara en una variable los datos generales de usuario
  editar() {
    let id = localStorage.getItem("id");
    if(!id) return alert("no tiene los datos del id");
    this.httpService.getPersonaId(parseInt(id)).subscribe(data => {
      this.persona[0] = data;
      this.editForm.controls.name.setValue(data.name);
      this.editForm.controls.apellidos.setValue(data.apellidos);
    })
  }
  //El valor de usario se actualizara para enviarse a actualizar
  actualizar() {
    //crea modelo de datos
    let updatePersona:Ipersona = {
      id: this.persona[0].id,
      name: this.editForm.controls.name.value,
      apellidos: this.editForm.controls.apellidos.value,
    };
    //verifica que los valores no esten vacio
    if(updatePersona.name != "" && updatePersona.apellidos != ""){
      this.httpService.updatePersona(updatePersona).subscribe(data => {
        this.isActiveModal = true;
      })
    }
  }
  cerrarModal() {
    //Se dirgue a la tabla
    this.isActiveModal = false;
    this.route.navigate(["listar"]);
  }
}
