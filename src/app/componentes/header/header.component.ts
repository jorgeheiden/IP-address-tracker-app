import { ServiceService } from './../../servicios/service.service';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  datosDeLocalizacion!:any

  @Output() nuevoEvento = new EventEmitter()

  constructor(private ServiceService: ServiceService) { }

  ngOnInit(): void {
    this.obtenerDatosPredeterminados()
  }

  obtenerDatosPredeterminados(){
    this.ServiceService.obtenerLocalizacionPredeterminada().subscribe( data => {
      this.datosDeLocalizacion = data
      this.nuevoEvento.emit(this.datosDeLocalizacion)
    })
  }

  busqueda = new FormControl('', [Validators.required, Validators.minLength(4)])

  buscar(dato:any){
    console.log(dato)
    if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(dato)){
      console.log("ip valida")
      this.busquedaPorIp(dato)
      //Vacia el input, mediante un reset() del FormContro()
      this.busqueda.reset()
    } else{
      console.log("dato invalido")
      this.busquedaPorDominio(dato)
      //Vacia el input, mediante un reset() del FormContro()
      this.busqueda.reset()
    }
  }

  busquedaPorIp(ip:any){
    this.ServiceService.obtenerDatosPorIp(ip).subscribe( data => {
      this.nuevoEvento.emit(data)
    })
  }

  busquedaPorDominio(dominio:any){
    this.ServiceService.obtenerDatosPorDominio(dominio).subscribe( data => {
      this.nuevoEvento.emit(data)
    })
  }

}
