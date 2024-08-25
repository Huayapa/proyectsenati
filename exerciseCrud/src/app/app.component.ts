import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListarComponent } from './pages/listar/listar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListarComponent, AddComponent, EditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exerciseCrud';
  //inyectamos la ruta
  private readonly router = inject(Router);
  //Direccionaran dependiendo del clic hecho en el HTML
  listar() {
    this.router.navigate(["/listar"]);
  }
  nuevo() {
    this.router.navigate(["/add"]);
  }
}
