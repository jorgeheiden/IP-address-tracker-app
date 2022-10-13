import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  datos!:any
  
  datosDeLocalizacion(datos:any){
    this.datos = datos
    console.log(this.datos)
  }
  
}
