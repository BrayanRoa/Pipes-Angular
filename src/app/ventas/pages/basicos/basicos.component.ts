import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

  nombreLower : string = 'brayan'
  nombreUpper : string = 'BRAYAN'
  nombreCompleto : string = 'BrAyAn aNdRéS'

  fecha : Date = new Date()

}
