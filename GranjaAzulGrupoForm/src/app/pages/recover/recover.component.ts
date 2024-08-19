import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Irecover } from '../../models/modelsuser';
import { UsersService } from '../../service/users.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recover',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './recover.component.html',
  styleUrl: './recover.component.css'
})
export class RecoverComponent {
  // Inyección del FormBuilder para construir formularios reactivos
  private readonly formBuilder = inject(FormBuilder);
  // Inyección del servicio UsersService para acceder a los usuarios
  readonly Inyectusers = inject(UsersService);
  // Definición del formulario reactivo con los controles necesarios
  formRecover = this.formBuilder.nonNullable.group({
    // Campo para el nombre de usuario, inicializado como cadena vacía
    usuario: "",
    // Campo para la fecha de nacimiento, inicializado con la fecha actual
    dateNac: "",
    // Campo para el género, inicializado como "hombre"
    genero: "hombre"
  });
  // Variable para almacenar la contraseña recuperada o null si no se encuentra
  recoveredPassword: string | null = null;

  // Método para recuperar la contraseña del usuario
  recoverPassword() {
    // Obtener el valor del campo de género del formulario
    const generoValue = this.formRecover.controls.genero.value;
    // Verificar que el valor de género sea válido ("hombre" o "mujer")
    if (generoValue === "hombre" || generoValue === "mujer") {
      // Crear el objeto de datos de recuperación usando los valores del formulari8
      const recoverData: Irecover = {
        username: this.formRecover.controls.usuario.value,
        dateNac: new Date(this.formRecover.controls.dateNac.value),
        genero: generoValue
      };
      // Llamar al método recuperarUser del servicio UsersService con los datos de recuperación
      // y almacenar la contraseña recuperada en recoveredPassword
      this.recoveredPassword = this.Inyectusers.recuperarUser(recoverData);
    } 
  }
  cerrarModal() {
    this.recoveredPassword = null;
  }
}
