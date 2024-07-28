import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BdusersService } from '../../services/bdusers.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent { //formBuilder (otra forma de hacerlo)
  public serviceUser = inject(BdusersService);
  // ListUser: any = [];
  //form group, formControl
  formGroup = new FormGroup({
    name: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });

  clickRegist():void {
    // console.log(this.formGroup?.value as string); //-v13
    // const valuesForm = this.formGroup?.value as string; //-v13
    console.log(this.formGroup.controls); //+v14
    const valuesForm2 = this.formGroup.controls; //+v14
    //obtener datos subscribiendome a los servicios por GET
    this.serviceUser.getUsers().subscribe(res => {
      console.log(res);
      // this.ListUser.push(res);
    })
  }
}
