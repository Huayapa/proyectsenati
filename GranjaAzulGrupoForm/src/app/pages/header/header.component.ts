import { Component } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
