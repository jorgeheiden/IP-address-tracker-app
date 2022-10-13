
import {  Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss'],
})
export class DatosComponent implements OnInit {
  
  datosObtenidos: any 

  @Input() set datos(valor:any){
      this.datosObtenidos = valor
  }

  constructor() { }


  ngOnInit(): void {
      
  }
  
}
