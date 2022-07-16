import { ParseTreeResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
 nombre="Adri";
 apellido="Lato";
 private  edad=50;
 empresa="M & A";
 frase="";
 eBoton=false;
 usuReg=false;
 textReg="No esta registrado";

 getEdad(){
  return this.edad;
 }

llamaEmpresa(value:String) {}
 GetRegUsu(){
  this.usuReg=true;
 }

 setusuRegistrado(event:Event){
 // alert("El usuario se acaba de registrar")
 this.textReg="El usuario se acaba de Registrar "
if((<HTMLInputElement>event.target).value=="si"){
  this.textReg="El usuario se acaba de Registrar "
}
else{
  this.textReg="El usuario no esta registrado "
}

 }


  constructor() { }

  ngOnInit(): void {
  }


}
