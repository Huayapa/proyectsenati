import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TableuserComponent } from './tableuser/tableuser.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ LoginComponent, RegisterComponent, TableuserComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
