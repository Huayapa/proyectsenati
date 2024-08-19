import { RouterLink } from '@angular/router';
import { Igenero, Iuser } from './../../models/modelsuser';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { isValidDate } from 'rxjs/internal/util/isDate';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  {
  //Inyecto la clase para formulario y el servicio
  private readonly formBuilder = inject(FormBuilder);
  private readonly Inyectusers = inject(UsersService);
  //formulario para obtener el registro
  formRegist = this.formBuilder.nonNullable.group({
    username: "",
    password: "",
    dateNac: "",
    genero: "hombre",
  });
  //variable para saber si se registro
  isregist:boolean | null = null;

  //Agregar datos del registro al servicio
  regist():void {
    //Definimos el model de datos
    let modelForm:Iuser = {
      username: this.formRegist.controls.username.value,
      password: this.formRegist.controls.password.value,
      dateNac: new Date( this.formRegist.controls.dateNac.value),
      genero: this.formRegist.controls.genero.value as Igenero,
    }
    //Validamos que hayan valores en los datos
    if(
      modelForm.username != "" && 
      modelForm.password != "" && 
      this.formRegist.controls.dateNac.value != ""
    ) {
      this.isregist = this.Inyectusers.registUser(modelForm); //agregamos los datos
      setTimeout(()=>{
        this.isregist = null;
      }, 4000)
    }
  }
  cerrarModal() {
    this.isregist = null;
  }
}
