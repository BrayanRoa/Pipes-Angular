import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //! i18nSelect
  nombre : string = 'Brayan'
  genero : string = 'masculino'

  //! este objeto es obligatorio porque se debe pasar en el PIPE i18nSelect
  invitacionMapa ={
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //? i18nPlural
  clientes : string[] = ['Maria', 'Eduardo', 'Camila', 'Andrés']

  clientesMapas = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente = ()=>{
    if(this.genero==='masculino'){
      this.nombre='Noemi';
      this.genero='femenino'
    } else{
      this.nombre='Brayan',
      this.genero='masculino'
    }
  }

  borrarCliente = ()=>{
    if(this.clientes.length>0){
      this.clientes.pop();
    }
  }

  //! KeyValue Pipe
  persona = {
    nombre : 'Brayan',
    edad : 22,
    dirección:'Cúcuta, Colombia'
  }

  //! JSON PIPE
  heroes =[
    {
      nombre: 'Superman',
      vuela : true
    },
    {
      nombre: 'Batman',
      vuela : true
    },
    {
      nombre: 'AquaMan',
      vuela : false
    },
  ]

  //! ASYNC PIPE
  miObservable = interval(1000); // 0,1,2,3,4,5...

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de la promesa')
    },3500)
  })
}
