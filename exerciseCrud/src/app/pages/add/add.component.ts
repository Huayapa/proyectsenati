import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IaddPersona } from '../../models/persona';
import { UserscrudService } from '../../service/userscrud.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html'
})
export class AddComponent {
  //Inyecciones formulario, servicio y rutas
  private readonly formBuilder = inject(FormBuilder)
  private readonly httpService = inject(UserscrudService);
  private readonly route = inject(Router); 
  //variable para la modal
  isActiveModal:boolean = false;
  //formulario
  addForm = this.formBuilder.nonNullable.group<IaddPersona>({
    name : "",
    apellidos: "",
  })
  //Guardar usuario
  guardar() {
    //crea modelo de datos
    let persona: IaddPersona = {
      name: this.addForm.controls.name.value,
      apellidos: this.addForm.controls.apellidos.value
    }
    //verifica que no este vacios
    if(persona.name !== "" && persona.apellidos !== "") {
      //envia los datos para guardarlos en la base de datos
      this.httpService.createPersona(persona).subscribe(() => {
        this.isActiveModal = true;
      })
    }
  }
  cerrarModal() {
    this.isActiveModal = false;
    this.route.navigate(["listar"]);
  }
}
