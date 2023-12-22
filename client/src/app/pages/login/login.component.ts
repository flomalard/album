import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  //nom de mon formulaire [formGroup] =
  myLoginForm: FormGroup;
  
  myErrorMessage: string = '';

  constructor() {
    // un formgroup = un formulaire, un formcontrol = un input
    this.myLoginForm = new FormGroup({
      // nom de l'input (formControlName=""): new FormControl('valeur par défaut', [mes Validators])
      myusername: new FormControl('My user name', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      mypassword: new FormControl('My password', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]),
    })
  }

}
