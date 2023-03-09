import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private fb:FormBuilder){

  }
/// Esse método é chamado quando o form inicia, NG é o Angular on Init, quando inicia o forumulario/componente
  ngOnInit() {
    this.initForms();
  }
/// Esse método é um método que guarda tudo que será feita quando este módulo (login) for criado
  initForms(){
    this.formRegister = this.fb.group({
      name: [null,Validators.required],
      email: [null,[Validators.required, Validators.email]],
      age: [null,Validators.required]
    })
  }
}
