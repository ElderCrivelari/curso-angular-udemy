import { Component,OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContinueRegisterComponent } from '../continue-register/continue-register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private fb:FormBuilder, private dialog:MatDialog){

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
///Este metodo cria uma tela no estilo de diálogo para continuar inserindo os dados para o cadastro
  openDialogRegister(){
    this.dialog.open(ContinueRegisterComponent,{
      width: '600px',
      autoFocus: false,
      maxHeight: '90vh',
      data: {
        data: this.createDataDialog()
      }
    })
  }
createDataDialog(
  name=this.getValueControl(this.formRegister,'name'),
  email = this.getValueControl(this.formRegister,'email'),
  age = this.getValueControl(this.formRegister,'age')){

  const dataDialog = {
    name,
    email,
    age
  }
  return dataDialog;


}

getValueControl(form:FormGroup,control:string){
  return form.controls[control].value;
}

}
