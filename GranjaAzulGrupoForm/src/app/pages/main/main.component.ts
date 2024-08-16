import { Component, ViewChild } from '@angular/core';
import { SeccionesComponent } from './secciones/secciones.component';
import { FotosComponent } from './fotos/fotos.component';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SeccionesComponent, FotosComponent, NgbCarouselModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
