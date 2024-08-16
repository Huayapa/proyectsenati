import { Component } from '@angular/core';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';

@Component({
  selector: 'app-secciones',
  standalone: true,
  imports: [Section1Component, Section2Component, Section3Component],
  templateUrl: './secciones.component.html',
  styleUrl: './secciones.component.css'
})
export class SeccionesComponent {

}
