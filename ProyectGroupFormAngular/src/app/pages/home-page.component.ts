import { Component } from '@angular/core';
import { HeaderMenubarComponent } from './header-menubar/header-menubar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderMenubarComponent, LoginComponent, RegisterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
