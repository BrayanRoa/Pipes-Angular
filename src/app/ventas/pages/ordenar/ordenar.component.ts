import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  enMayusculas: boolean =false
  ordenar : string=''

  heroes: Heroe[]=[
    {
      nombre : 'Superman',
      vuela  : true,
      color : Color.azul
    },
    {
      nombre : 'Batman',
      vuela  : false,
      color : Color.negro
    },
    {
      nombre : 'Robin',
      vuela  : false,
      color : Color.verde
    },
    {
      nombre : 'Daredevil',
      vuela  : false,
      color : Color.verde
    },
    {
      nombre : 'Linterna Verde',
      vuela  : true,
      color : Color.verde
    },
  ]
  

  cambiar(){
    this.enMayusculas = !this.enMayusculas
  }

  ordenarPor(valor:string){
    this.ordenar = valor
  }

  

}
