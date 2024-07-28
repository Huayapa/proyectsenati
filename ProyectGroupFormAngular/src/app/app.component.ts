import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { HeaderMenubarComponent } from './pages/header-menubar/header-menubar.component';
import { TableuserComponent } from './pages/tableuser/tableuser.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, HeaderMenubarComponent, RouterLink, TableuserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectGroupFormAngular';
}
